import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import CodeTitle from 'rehype-code-titles';

const serializeContent = async (
  content: string,
): Promise<{ source: { compiledSource: string } }> => {
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism, CodeTitle],
    },
  });
  return source as unknown as { source: { compiledSource: string } };
};
export default serializeContent;
