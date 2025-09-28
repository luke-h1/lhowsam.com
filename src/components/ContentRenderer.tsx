import { variables } from '@frontend/styles/variables.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import MDXComponents from './MDXComponents';

interface Props {
  content: string;
}

const ContentRenderer = ({ content }: Props) => {
  /**
   * Hacky fix to inject the video component into the content
   * since we can 't embed video blocks in markdown
   */
  const processedContent = content.replace(
    /And so when we scrolled the sports data out of view, it reused that same component \(which didn't cause an unmount\) just with different data:/g,
    `And so when we scrolled the sports data out of view, it reused that same component (which didn't cause an unmount) just with different data:

<MuxVideo playbackId="X7W1lodzJWhO9Qeno6I9lqrBhFWQ3d00NxiEeW8tjCJA" caption="Video demonstration of the scrolling behavior" />`,
  );

  return (
    <div
      data-testid="content"
      style={{
        maxWidth: variables.contentWidth.container,
      }}
    >
      <MDXRemote
        components={MDXComponents}
        source={processedContent}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypePrism],
            useDynamicImport: true,
          },
        }}
      />
    </div>
  );
};
export default ContentRenderer;
