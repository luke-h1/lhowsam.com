import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const inputFile = path.resolve(process.cwd(), 'sanity-content/experience.json');
const contentDir = path.resolve(process.cwd(), 'src/content/work-projects');
const assetDir = path.resolve(process.cwd(), 'src/assets/work-projects');
const assetImportPrefix = '../../assets/work-projects';

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

export function rewriteMarkdownImages(markdown, assets) {
  let output = markdown;

  for (const asset of assets) {
    output = output.split(asset.originalUrl).join(asset.relativePath);
  }

  return output;
}

export function extractVideos(videos = []) {
  return (videos ?? [])
    .map((video) => ({
      playbackId: video?.video?.asset?.playbackId ?? video?.playbackId ?? '',
      caption: video?.caption ?? '',
    }))
    .filter((video) => video.playbackId);
}

export function injectInlineVideos(content, videos = []) {
  let output = content;

  output = output.replace(/\{\{video:([^}]+)\}\}/g, (_, videoId) => {
    const video = videos.find((item) => item.playbackId === videoId.trim());

    if (!video) {
      return '';
    }

    const caption = video.caption || '';
    return `<MuxVideo playbackId="${video.playbackId}" caption="${caption}" />`;
  });

  const sportingLifeMarker =
    "And so when we scrolled the sports data out of view, it reused that same component (which didn't cause an unmount) just with different data:";

  if (
    videos.length > 0 &&
    output.includes(sportingLifeMarker) &&
    !output.includes('<MuxVideo ')
  ) {
    const primaryVideo = videos[0];
    const caption =
      primaryVideo.caption || 'Video demonstration of the scrolling behavior';

    output = output.replace(
      sportingLifeMarker,
      `${sportingLifeMarker}\n\n<MuxVideo playbackId="${primaryVideo.playbackId}" caption="${caption}" />`,
    );
  }

  return output;
}

export function buildExperienceMdxDocument({
  slug,
  title,
  intro,
  publishedAt,
  heroImagePath,
  companySite,
  siteUrl,
  githubUrl,
  content,
}) {
  const frontmatter = [
    '---',
    `title: ${escapeFrontmatterString(title)}`,
    `slug: ${escapeFrontmatterString(slug)}`,
    `intro: ${escapeFrontmatterString(intro)}`,
    `publishedAt: ${publishedAt}`,
    `heroImage: ${escapeFrontmatterString(heroImagePath)}`,
    ...(companySite ? [`companySite: ${escapeFrontmatterString(companySite)}`] : []),
    ...(siteUrl ? [`siteUrl: ${escapeFrontmatterString(siteUrl)}`] : []),
    ...(githubUrl ? [`githubUrl: ${escapeFrontmatterString(githubUrl)}`] : []),
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

async function createAssetDownloads(slug, entry) {
  const downloads = [];
  const heroUrl = entry.image?.asset?.url;

  if (!heroUrl) {
    throw new Error(`Experience entry "${slug}" is missing a hero image asset url`);
  }

  const heroExtension = getExtensionFromUrl(heroUrl);
  const heroFilename = `${slug}-hero${heroExtension}`;

  downloads.push({
    originalUrl: heroUrl,
    filename: heroFilename,
    destinationPath: path.join(assetDir, heroFilename),
    relativePath: `${assetImportPrefix}/${heroFilename}`,
  });

  const inlineUrls = collectInlineImageUrls(entry.content ?? '');

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

async function convertExperienceEntry(entry) {
  const slug = entry.slug?.current;

  if (!slug) {
    throw new Error(`Encountered experience entry without slug: ${entry._id ?? entry.title}`);
  }

  const safeSlug = slugifySegment(slug);
  const assetDownloads = await createAssetDownloads(safeSlug, entry);

  await Promise.all(
    assetDownloads.map((asset) => downloadFile(asset.originalUrl, asset.destinationPath)),
  );

  const content = rewriteMarkdownImages(entry.content ?? '', assetDownloads.slice(1));
  const heroImagePath = assetDownloads[0].relativePath;
  const videos = extractVideos(entry.videos);
  const contentWithVideos = injectInlineVideos(content, videos);
  const mdx = buildExperienceMdxDocument({
    slug,
    title: entry.title,
    intro: entry.intro,
    publishedAt: entry.publishedAt,
    heroImagePath,
    companySite: entry.companySite,
    siteUrl: entry.siteUrl,
    githubUrl: entry.githubUrl,
    content: contentWithVideos,
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
  const entries = JSON.parse(raw);

  const results = [];

  for (const entry of entries) {
    results.push(await convertExperienceEntry(entry));
  }

  console.log(`Converted ${results.length} experience entries to MDX.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
