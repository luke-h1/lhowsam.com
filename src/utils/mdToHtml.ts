/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { bundleMDX } from 'mdx-bundler';
import CodeTitle from 'rehype-code-titles';

export async function mdxToHtml(content: string) {
  const { code } = await bundleMDX({
    source: content,
    // @ts-ignore
    mdxOptions(options) {
      options.rehypePlugins = [...(options.remarkPlugins ?? []), [CodeTitle]];
    },
  });
  return code;
}

/* 
import Headings from 'rehype-autolink-headings';
import CodeTitle from 'rehype-code-titles';

*/
