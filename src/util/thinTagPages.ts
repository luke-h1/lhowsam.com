import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { toTagSlug } from './tags';

const BLOG_DIR = 'src/content/blog';
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

interface Frontmatter {
  draft?: boolean;
  tags?: unknown;
}

const readFrontmatter = (path: string): Frontmatter | null => {
  const match = readFileSync(path, 'utf8').match(FRONTMATTER);
  return match ? parse(match[1]) : null;
};

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
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .flatMap(file => postTagSlugs(readFrontmatter(join(dir, file))))
    .forEach(slug => counts.set(slug, (counts.get(slug) ?? 0) + 1));

  return new Set(
    [...counts.entries()]
      .filter(([, count]) => count < minPosts)
      .map(([slug]) => slug),
  );
}
