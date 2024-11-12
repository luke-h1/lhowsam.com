/* eslint-disable react/no-unstable-nested-components */
import { variables } from '@frontend/styles/variables.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { bundledLanguages, bundledThemes } from 'shiki';
import MDXComponents from './MDXComponents';

interface Props {
  content: string;
}

const options = {
  themes: Object.keys(bundledThemes),
  langs: Object.keys(bundledLanguages),
  // theme: 'one-dark-pro',
  transformers: [],
  theme: 'slack-dark',
};

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
            rehypePlugins: [[rehypePrettyCode, options]],
            remarkPlugins: [remarkGfm],
            useDynamicImport: true,
          },
        }}
      />
    </div>
  );
};
export default ContentRenderer;
