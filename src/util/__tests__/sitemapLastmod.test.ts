import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';

import { contentLastmod } from '../sitemapLastmod';

let root: string;

const entry = (section: string, name: string, frontmatter: string) => {
  mkdirSync(join(root, section), { recursive: true });
  writeFileSync(
    join(root, section, name),
    `---\n${frontmatter}\n---\n\nBody.\n`,
  );
};

const sections = () => [
  { dir: join(root, 'blog'), path: '/blog/' },
  { dir: join(root, 'talks'), path: '/talks/' },
];

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'lastmod-'));
  mkdirSync(join(root, 'blog'));
  mkdirSync(join(root, 'talks'));
});

afterEach(() => {
  rmSync(root, { recursive: true, force: true });
});

describe('contentLastmod', () => {
  test('uses updatedAt before publishedAt', () => {
    entry(
      'blog',
      'a.mdx',
      'slug: a\npublishedAt: 2024-01-01\nupdatedAt: 2024-06-01',
    );

    expect(contentLastmod(sections()).get('/blog/a/')).toEqual(
      new Date('2024-06-01'),
    );
  });

  test('gives each section the date of its newest entry', () => {
    entry('blog', 'a.mdx', 'slug: a\npublishedAt: 2024-01-01');
    entry('blog', 'b.mdx', 'slug: b\npublishedAt: 2025-03-01');
    entry('talks', 'c.mdx', 'slug: c\npublishedAt: 2023-05-01');

    const lastmod = contentLastmod(sections());

    expect(lastmod.get('/blog/')).toEqual(new Date('2025-03-01'));
    expect(lastmod.get('/talks/')).toEqual(new Date('2023-05-01'));
  });

  test('skips drafts and entries without a slug or date', () => {
    entry('blog', 'a.mdx', 'slug: a\ndraft: true\npublishedAt: 2024-01-01');
    entry('blog', 'b.mdx', 'publishedAt: 2024-01-01');
    entry('blog', 'c.mdx', 'slug: c');
    writeFileSync(join(root, 'blog', 'notes.txt'), '---\nslug: d\n---\n');

    expect(contentLastmod(sections()).size).toBe(0);
  });
});
