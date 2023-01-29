/* eslint-disable no-param-reassign */
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkCodeTitle from './remarkCodeTitle';

export interface MdxResult {
  compiledSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export default async function mdxToHtml(source: string): Promise<MdxResult> {
  const { data } = matter(source);

  const html = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle, remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        [rehypePrettyCode],
        rehypeAccessibleEmojis,
      ],
    },
    scope: data,
  });

  return {
    compiledSource: html,
  };
}
