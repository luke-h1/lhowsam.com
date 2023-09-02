'use client';

import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from './MDXComponents';

interface Props {
  compiledSource: string;
}

const ContentRenderer = ({ compiledSource }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div data-testid="content">
      <MDXRemote
        components={MDXComponents}
        compiledSource={compiledSource}
        scope={undefined}
        frontmatter={undefined}
        lazy
      />
    </div>
  );
};
export default ContentRenderer;
