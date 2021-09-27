/* eslint-disable no-param-reassign */
import { join } from 'path';
import { readdirSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import { Post } from '@src/types/post';

type PostTypes = 'posts' | 'projects' | 'snippets';

export async function getFiles(type: PostTypes) {
  return readdirSync(join(process.cwd(), 'src/data', type));
}

export function getSlugsFromDir(dir: string): string[] {
  return readdirSync(dir);
}

export async function getItemBySlug<T = unknown>(
  slug: string,
  type: PostTypes,
): Promise<T> {
  const dir = join(process.cwd(), 'src', 'data', type);
  const realSlug = slug.replace(/\.mdx$/, '');
  const source = join(dir, `${realSlug}.mdx`);

  const { code: content, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypeAutolinkHeadings,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ] as any;
      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
      };

      return options;
    },
  });
  const { text } = readingTime(content);

  return {
    // code,
    slug: realSlug,
    content,
    readingTime: text,
    createdAt: frontmatter.createdAt,
    intro: frontmatter.intro,
    keywords: frontmatter.keywords ?? '',
    title: frontmatter.title,
    updatedAt: frontmatter.updatedAt ?? null,
    draft: frontmatter.draft ?? false,
    ...frontmatter,
  } as any as T;
}

export async function getAllItems<T extends Post>(
  type: PostTypes,
  includeDrafts = false,
): Promise<T[]> {
  const slugs = readdirSync(join(process.cwd(), 'src/data', type));

  let posts = await Promise.all(
    slugs.map(async (slug) => getItemBySlug<T>(slug, type)),
  );

  posts = posts.sort((post1, post2) => (new Date(post1.createdAt) > new Date(post2.createdAt) ? -1 : 1));

  if (!includeDrafts) {
    posts = posts.filter((v) => !v.draft);
  }
  return posts as unknown as Pick<T, keyof T>[];
}
