import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { ReactMarkdown } from '@src/styles/blog';
import { Link } from './Markdown/Link';
import Alert from './Markdown/Alert';
import Code from './Markdown/Code';

const components = {
  a: Link,
  // Image: Image,
  code: Code,
  Alert,
};

interface Props {
  content: string;
}

export const Markdown = ({ content }: Props) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);

  return (
    <ReactMarkdown>
      <Component components={components as any} />
    </ReactMarkdown>
  );
};
