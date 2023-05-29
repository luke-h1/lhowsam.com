'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Components from './MDXComponents';
import Prose from './Prose/Prose';

interface Props {
  compiledSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ContentRenderer = ({ compiledSource }: Props) => {
  return (
    <Prose>
      <MDXRemote
        compiledSource={compiledSource.compiledSource}
        components={Components}
        scope={undefined}
        frontmatter={undefined}
      />
    </Prose>
  );
};

export default ContentRenderer;
