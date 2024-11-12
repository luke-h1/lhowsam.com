/* eslint-disable react/no-unstable-nested-components */
import { variables } from '@frontend/styles/variables.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
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
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </div>
  );
};
export default ContentRenderer;
