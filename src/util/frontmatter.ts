import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

export const isMarkdownFile = (file: string) =>
  file.endsWith('.mdx') || file.endsWith('.md');

export function readFrontmatter<T>(path: string): T | null {
  const match = readFileSync(path, 'utf8').match(FRONTMATTER);
  return match ? parse(match[1]) : null;
}
