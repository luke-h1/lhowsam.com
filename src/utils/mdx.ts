/* eslint-disable no-param-reassign */
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import gfmPlugin from 'remark-gfm';
import slugPlugin from 'remark-slug';
import type { PostMeta } from '@src/types/post';

const rootPath = `${process.cwd()}/src/data`;
export const postsPath = path.join(rootPath, 'posts');

export const getAllPostsMeta = (category?: PostMeta['category']) => {
  const PATH = path.join(postsPath);

  // get file paths in blog folder that end with .mdx
  const paths = glob.sync(`${PATH}/**/*.mdx`);
  return (
    paths
      .map((filePath): PostMeta => {
        //   get content of the file
        const source = fs.readFileSync(path.join(filePath), 'utf-8');

        // get the slug
        const slug = path.basename(filePath).replace('.mdx', '');

        // extract post meta from post content
        const data = matter(source).data as PostMeta;
        return {
          ...data,
          slug,
        };
      })
      //   filter post by category if specified
      .filter((post) => {
        //   default to all posts
        if (!category) return true;
        return post.category === category;
      })
      //   sort posts by createdAt date
      .sort(
        (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
      )
  );
};

// get content of post
export const getPostBySlug = async (slug: string) => {
  // get content of file
  const source = fs.readFileSync(path.join(postsPath, `${slug}.mdx`), 'utf-8');

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
