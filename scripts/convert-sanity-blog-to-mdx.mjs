import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const inputFile = path.resolve(process.cwd(), 'sanity-content/blog-posts.json');
const contentDir = path.resolve(process.cwd(), 'src/content/blog');
const assetDir = path.resolve(process.cwd(), 'src/assets/blog');
const assetImportPrefix = '../../assets/blog';

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

export function buildMdxDocument({
  slug,
  title,
  intro,
  publishedAt,
  tags,
  heroImagePath,
  content,
}) {
  const frontmatter = [
    '---',
    `title: ${escapeFrontmatterString(title)}`,
    `slug: ${escapeFrontmatterString(slug)}`,
    `intro: ${escapeFrontmatterString(intro)}`,
    `publishedAt: ${publishedAt}`,
    `tags: ${JSON.stringify(tags)}`,
    `heroImage: ${escapeFrontmatterString(heroImagePath)}`,
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

async function createAssetDownloads(slug, post) {
  const downloads = [];
  const heroUrl = post.image?.asset?.url;

  if (!heroUrl) {
    throw new Error(`Post "${slug}" is missing a hero image asset url`);
  }

  const heroExtension = getExtensionFromUrl(heroUrl);
  const heroFilename = `${slug}-hero${heroExtension}`;

  downloads.push({
    originalUrl: heroUrl,
    filename: heroFilename,
    destinationPath: path.join(assetDir, heroFilename),
    relativePath: `${assetImportPrefix}/${heroFilename}`,
  });

  const inlineUrls = collectInlineImageUrls(post.content ?? '');

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

async function convertPost(post) {
  const slug = post.slug?.current;

  if (!slug) {
    throw new Error(`Encountered blog post without slug: ${post._id ?? post.title}`);
  }

  const safeSlug = slugifySegment(slug);
  const assetDownloads = await createAssetDownloads(safeSlug, post);

  await Promise.all(
    assetDownloads.map((asset) => downloadFile(asset.originalUrl, asset.destinationPath)),
  );

  const content = rewriteMarkdownImages(post.content ?? '', assetDownloads.slice(1));
  const heroImagePath = assetDownloads[0].relativePath;
  const mdx = buildMdxDocument({
    slug,
    title: post.title,
    intro: post.intro,
    publishedAt: post.publishedAt,
    tags: toTagList(post.tags),
    heroImagePath,
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
  const posts = JSON.parse(raw);

  const results = [];

  for (const post of posts) {
    results.push(await convertPost(post));
  }

  console.log(`Converted ${results.length} blog posts to MDX.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
