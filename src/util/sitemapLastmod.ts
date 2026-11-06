import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { isMarkdownFile, readFrontmatter } from './frontmatter';

interface Frontmatter {
  slug?: string;
  draft?: boolean;
  publishedAt?: string | Date;
  updatedAt?: string | Date;
}

export interface ContentSection {
  dir: string;
  path: string;
}

export const CONTENT_SECTIONS: ContentSection[] = [
  { dir: 'src/content/blog', path: '/blog/' },
  { dir: 'src/content/work-projects', path: '/work-projects/' },
  { dir: 'src/content/talks', path: '/talks/' },
];

const lastModified = (data: Frontmatter) => {
  const value = data.updatedAt ?? data.publishedAt;
  if (!value) {
    return null;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

export function contentLastmod(sections: ContentSection[] = CONTENT_SECTIONS) {
  const lastmod = new Map<string, Date>();

  sections.forEach(({ dir, path }) => {
    readdirSync(dir)
      .filter(isMarkdownFile)
      .forEach(file => {
        const data = readFrontmatter<Frontmatter>(join(dir, file));
        if (!data?.slug || data.draft) {
          return;
        }

        const date = lastModified(data);
        if (!date) {
          return;
        }

        lastmod.set(`${path}${data.slug}/`, date);

        const sectionDate = lastmod.get(path);
        if (!sectionDate || date > sectionDate) {
          lastmod.set(path, date);
        }
      });
  });

  return lastmod;
}
