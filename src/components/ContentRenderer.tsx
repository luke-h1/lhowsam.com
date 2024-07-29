import { variables } from '@frontend/styles/variables.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import MDXComponents from './MDXComponents';

interface Props {
  content: string;
}

const ContentRenderer = ({ content }: Props) => {
  return (
    <div
      data-testid="content"
      style={{
        maxWidth: variables.contentWidth.container,
      }}
    >
      <MDXRemote
        components={MDXComponents}
        source={content}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypePrism as unknown as never],
            mdxExtensions: [],
          },
        }}
      />
    </div>
  );
};
export default ContentRenderer;
