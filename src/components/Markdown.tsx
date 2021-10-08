import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import styles from '@src/styles/blog.module.scss';
import { Link } from './Markdown/Link';
import Alert from './Markdown/Alert';

const components = {
  a: Link,
  // Image: Image,
  Alert,
};

interface Props {
  content: string;
}

export const Markdown = ({ content }: Props) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);

  return (
    <main className={styles.reactMarkdown}>
      <Component components={components as any} />
    </main>
  );
};
