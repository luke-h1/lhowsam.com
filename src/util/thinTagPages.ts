import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { isMarkdownFile, readFrontmatter } from './frontmatter';
import { toTagSlug } from './tags';

const BLOG_DIR = 'src/content/blog';

interface Frontmatter {
  draft?: boolean;
  tags?: unknown;
}

const postTagSlugs = (data: Frontmatter | null) => {
  if (!data || data.draft || !Array.isArray(data.tags)) {
    return [];
  }

  return [
    ...new Set<string>(
      data.tags.map(tag => toTagSlug(String(tag))).filter(Boolean),
    ),
  ];
};

export function thinTagSlugs(minPosts: number, dir: string = BLOG_DIR) {
  const counts = new Map<string, number>();

  readdirSync(dir)
    .filter(isMarkdownFile)
    .flatMap(file =>
      postTagSlugs(readFrontmatter<Frontmatter>(join(dir, file))),
    )
    .forEach(slug => counts.set(slug, (counts.get(slug) ?? 0) + 1));

  return new Set(
    [...counts.entries()]
      .filter(([, count]) => count < minPosts)
      .map(([slug]) => slug),
  );
}
