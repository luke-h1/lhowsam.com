/* eslint-disable no-param-reassign */
import { readdirSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export function getSlugsFromDir(dir: string): string[] {
  return readdirSync(dir);
}

interface Post {
  title: string;
  intro: string;
  slug: string;
  content: string;
  tags: string;
  draft?: boolean;
  featured?: boolean;
  frontmatter: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  createdAt: string;
  updatedAt: string;
}

export type Fields<T> = (keyof T)[];

type Types = 'posts' | 'projects';

export async function getItemBySlug<T extends Post>(
  slug: string,
  type: Types,
): Promise<T> {
  const dir = join(process.cwd(), 'src', 'data', type);
  const formattedSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(dir, `${formattedSlug}.mdx`);

  const { code: content, frontmatter } = await bundleMDX({
    file: fullPath,
    xdmOptions: options => {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];

      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypeAutolinkHeadings,
      ];
      return options;
    },
    esbuildOptions: options => {
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
      };
      return options;
    },
  });
  const { text } = frontmatter.readingTime
    ? { text: frontmatter.readingTime }
    : readingTime(content);
  return {
    slug: formattedSlug,
    content,
    readingTime: text,
    frontmatter,
    intro: frontmatter.intro,
    tags: frontmatter.tags,
    title: frontmatter.title,
    draft: frontmatter.draft ?? false,
    featured: frontmatter.featured ?? false,
    archived: frontmatter.archived ?? false,
    createdAt: frontmatter.createdAt,
    updatedAt: frontmatter.updatedAt,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any as T;
}

export async function getAllItems<T extends Post>(
  type: Types,
  includeDrafts = false,
): Promise<T[]> {
  const slugs = getSlugsFromDir(
    join(process.cwd(), 'src', 'data', type),
  ).filter(v => /\.mdx?$/.test(v));

  let posts = await Promise.all(
    slugs.map(async slug => getItemBySlug<T>(slug, type)),
  );

  posts = posts.sort((a, b) =>
    new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1,
  );

  if (!includeDrafts) {
    posts = posts.filter(p => !p.draft);
  }
  return posts;
}
