import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';

import { thinTagSlugs } from '../thinTagPages';

let dir: string;

const post = (name: string, frontmatter: string) => {
  writeFileSync(join(dir, name), `---\n${frontmatter}\n---\n\nBody.\n`);
};

beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'thin-tags-'));
});

afterEach(() => {
  rmSync(dir, { recursive: true, force: true });
});

describe('thinTagSlugs', () => {
  test('returns the slugs used by fewer posts than the threshold', () => {
    post('a.mdx', 'tags: ["React", "Astro"]');
    post('b.mdx', 'tags: ["React"]');
    post('c.md', 'tags: ["React"]');

    expect(thinTagSlugs(3, dir)).toEqual(new Set(['astro']));
  });

  test('ignores drafts', () => {
    post('a.mdx', 'tags: ["React"]');
    post('b.mdx', 'draft: true\ntags: ["React"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set(['react']));
  });

  test('ignores a draft flag followed by a comment', () => {
    post('a.mdx', 'tags: ["React"]');
    post('b.mdx', 'draft: true # unfinished\ntags: ["React"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set(['react']));
  });

  test('keeps a comma inside a quoted tag as one tag', () => {
    post('a.mdx', 'tags: ["C++, and friends"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set(['c-and-friends']));
  });

  test('counts case-equivalent tags on one post once', () => {
    post('a.mdx', 'tags: ["React", "react"]');
    post('b.mdx', 'tags: ["React"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set());
  });

  test('reads block sequences as well as inline arrays', () => {
    post('a.mdx', 'tags:\n  - React\n  - Astro');
    post('b.mdx', 'tags: ["React"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set(['astro']));
  });

  test('skips files that are not markdown', () => {
    post('a.mdx', 'tags: ["React"]');
    writeFileSync(join(dir, 'notes.txt'), '---\ntags: ["React"]\n---\n');

    expect(thinTagSlugs(2, dir)).toEqual(new Set(['react']));
  });

  test('skips files with no frontmatter and posts with no tags', () => {
    writeFileSync(join(dir, 'a.mdx'), 'Just a body.\n');
    post('b.mdx', 'title: Untagged');
    post('c.mdx', 'tags: ["React"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set(['react']));
  });

  test('returns nothing when every tag meets the threshold', () => {
    post('a.mdx', 'tags: ["React"]');
    post('b.mdx', 'tags: ["React"]');

    expect(thinTagSlugs(2, dir)).toEqual(new Set());
  });
});
