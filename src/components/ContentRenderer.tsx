/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import MDXComponents from './MDXComponents';

interface Props {
  content: string;
}

const ContentRenderer = ({ content }: Props) => {
  return (
    <div data-testid="content">
      {/* @ts-ignore */}
      <MDXRemote
        components={MDXComponents}
        source={content}
        options={{
          mdxOptions: {
            // @ts-ignore
            rehypePlugins: [rehypePrism],
            mdxExtensions: [],
          },
        }}
      />
    </div>
  );
};
export default ContentRenderer;
