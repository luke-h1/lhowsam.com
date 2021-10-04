/* eslint-disable no-param-reassign */
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { join, basename } from 'path';
import gfmPlugin from 'remark-gfm';
import slugPlugin from 'remark-slug';
import type { PostMeta } from '@src/types/post';

type PostTypes = 'posts';

export const getAllPostsMeta = (type: PostTypes) => {
  const path = join(process.cwd(), 'src', 'data', type);

  // get file paths in blog folder that end with .mdx
  const paths = glob.sync(`${path}/**/*.mdx`);
  return (
    paths
      .map((filePath): PostMeta => {
        //   get content of the file
        const source = fs.readFileSync(join(filePath), 'utf-8');

        // get the slug
        const slug = basename(filePath).replace('.mdx', '');

        // extract post meta from post content
        const data = matter(source).data as PostMeta;
        return {
          ...data,
          slug,
        };
      })
      // don't include drafts
      .filter((post) => {
        if (post.draft) return false;
        return post;
      })
      // sort posts by createdAt date
      .sort(
        (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
      )
  );
};

// get content of post
export const getPostBySlug = async (slug: string, type: string) => {
  // get content of file
  const source = fs.readFileSync(
    join(process.cwd(), 'src', 'data', type, `${slug}.mdx`),
    'utf-8',
  );

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        slugPlugin,
        gfmPlugin,
      ];
      return options;
    },
  });
  const meta = {
    ...frontmatter,
    slug,
  } as PostMeta;
  return {
    meta,
    code,
  };
};
