import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const inputFile = path.resolve(process.cwd(), 'sanity-content/projects.json');
const contentDir = path.resolve(process.cwd(), 'src/content/projects');
const assetDir = path.resolve(process.cwd(), 'src/assets/projects');
const assetImportPrefix = '../../assets/projects';

function slugifySegment(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function escapeFrontmatterString(value) {
  return JSON.stringify(value ?? '');
}

function getExtensionFromUrl(url, fallback = '.png') {
  const pathname = new URL(url).pathname;
  const extension = path.extname(pathname);
  return extension || fallback;
}

export function toTagList(tags = []) {
  return tags
    .map((tag) => tag?.slug?.current ?? tag?.title ?? '')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function rewriteMarkdownImages(markdown, assets) {
  let output = markdown;

  for (const asset of assets) {
    output = output.split(asset.originalUrl).join(asset.relativePath);
  }

  return output;
}

export function buildProjectMdxDocument({
  slug,
  title,
  intro,
  tags,
  heroImagePath,
  githubUrl,
  siteUrl,
  order,
  content,
}) {
  const frontmatter = [
    '---',
    `title: ${escapeFrontmatterString(title)}`,
    `slug: ${escapeFrontmatterString(slug)}`,
    `intro: ${escapeFrontmatterString(intro)}`,
    `tags: ${JSON.stringify(tags)}`,
    `heroImage: ${escapeFrontmatterString(heroImagePath)}`,
    `githubUrl: ${escapeFrontmatterString(githubUrl)}`,
    ...(siteUrl ? [`siteUrl: ${escapeFrontmatterString(siteUrl)}`] : []),
    ...(Number.isFinite(order) ? [`order: ${order}`] : []),
    '---',
    '',
  ].join('\n');

  return `${frontmatter}\n${content.trim()}\n`;
}

async function downloadFile(url, destinationPath) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url} (${response.status})`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destinationPath, buffer);
}

function collectInlineImageUrls(markdown) {
  const matches = markdown.matchAll(/!\[[^\]]*]\((https?:\/\/[^)\s]+)\)/g);
  return Array.from(new Set(Array.from(matches, (match) => match[1])));
}

async function createAssetDownloads(slug, project) {
  const downloads = [];
  const heroUrl = project.image?.asset?.url;

  if (!heroUrl) {
    throw new Error(`Project "${slug}" is missing a hero image asset url`);
  }

  const heroExtension = getExtensionFromUrl(heroUrl);
  const heroFilename = `${slug}-hero${heroExtension}`;

  downloads.push({
    originalUrl: heroUrl,
    filename: heroFilename,
    destinationPath: path.join(assetDir, heroFilename),
    relativePath: `${assetImportPrefix}/${heroFilename}`,
  });

  const inlineUrls = collectInlineImageUrls(project.content ?? '');

  inlineUrls.forEach((url, index) => {
    const extension = getExtensionFromUrl(url);
    const filename = `${slug}-inline-${index + 1}${extension}`;

    downloads.push({
      originalUrl: url,
      filename,
      destinationPath: path.join(assetDir, filename),
      relativePath: `${assetImportPrefix}/${filename}`,
    });
  });

  return downloads;
}

async function convertProject(project) {
  const slug = project.slug?.current;

  if (!slug) {
    throw new Error(`Encountered project without slug: ${project._id ?? project.title}`);
  }

  const safeSlug = slugifySegment(slug);
  const assetDownloads = await createAssetDownloads(safeSlug, project);

  await Promise.all(
    assetDownloads.map((asset) => downloadFile(asset.originalUrl, asset.destinationPath)),
  );

  const content = rewriteMarkdownImages(project.content ?? '', assetDownloads.slice(1));
  const heroImagePath = assetDownloads[0].relativePath;
  const mdx = buildProjectMdxDocument({
    slug,
    title: project.title,
    intro: project.intro,
    tags: toTagList(project.tags),
    heroImagePath,
    githubUrl: project.githubUrl,
    siteUrl: project.siteUrl,
    order: project.order,
    content,
  });

  const outputPath = path.join(contentDir, `${safeSlug}.mdx`);
  await writeFile(outputPath, mdx, 'utf8');

  return {
    slug: safeSlug,
    outputPath,
    assetCount: assetDownloads.length,
  };
}

async function main() {
  await mkdir(contentDir, { recursive: true });
  await mkdir(assetDir, { recursive: true });

  const raw = await readFile(inputFile, 'utf8');
  const projects = JSON.parse(raw);

  const results = [];

  for (const project of projects) {
    results.push(await convertProject(project));
  }

  console.log(`Converted ${results.length} projects to MDX.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
