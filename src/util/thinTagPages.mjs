import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const BLOG_DIR = 'src/content/blog';

// Mirrors toTagSlug in src/util/tags.ts; locked by src/util/__tests__/tags.test.ts.
const toTagSlug = tag =>
  tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/**
 * Tag slugs that aggregate fewer than `minPosts` published posts. These are
 * noindexed by src/pages/blog/tags/[tag].astro, so the sitemap must not
 * advertise them: a sitemap should only ever list indexable URLs.
 */
export function thinTagSlugs(minPosts) {
  const counts = new Map();

  for (const file of readdirSync(BLOG_DIR)) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;

    const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
    const frontmatter = raw.split('---')[1] ?? '';

    if (/^draft:\s*true\s*$/m.test(frontmatter)) continue;

    const tagBlock = frontmatter.match(/^tags:\s*(\[[^\]]*\]|(?:\n\s*-\s*.+)+)/m);
    if (!tagBlock) continue;

    const tags = tagBlock[1].startsWith('[')
      ? tagBlock[1].slice(1, -1).split(',')
      : tagBlock[1].split('\n').map(line => line.replace(/^\s*-\s*/, ''));

    for (const tag of tags) {
      const clean = tag.trim().replace(/^['"]|['"]$/g, '');
      if (!clean) continue;
      const slug = toTagSlug(clean);
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return new Set(
    [...counts.entries()]
      .filter(([, count]) => count < minPosts)
      .map(([slug]) => slug),
  );
}
