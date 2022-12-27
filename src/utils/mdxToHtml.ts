import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkCodeTitle from './remarkCodeTitle';

export interface MdxResult {
  compiledSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  timeToRead: number;
  excerpt: string;
}

export default async function mdxToHtml(source: string): Promise<MdxResult> {
  const { data, content, excerpt } = matter(source);
  const timeToRead = readingTime(content).minutes;

  const html = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
      rehypePlugins: [mdxPrism, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    compiledSource: html,
    timeToRead,
    excerpt: excerpt as string,
  };
}
