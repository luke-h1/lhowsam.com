/* eslint-disable no-param-reassign */
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkCodeTitle from './remarkCodeTitle';

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
    node.properties.className.push('syntax-line');
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('syntax-line--highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['syntax-word--highlighted'];
  },
};

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
        [rehypePrettyCode, rehypePrettyCodeOptions],
        rehypeAccessibleEmojis,
      ],
    },
    scope: data,
  });

  return {
    compiledSource: html,
  };
}
