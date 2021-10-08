import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-async-light';
import Theme from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import styles from '@src/styles/blog.module.scss';

interface Props {
  children: React.ReactNode;
  inline: boolean;
  className: string;
}

export const MDCode = ({ children, className, inline }: Props) => {
  const match = /language-(\w+)/.exec(className || '');
  const text = String(children).replace(/\n$/, '');
  const [btnText, setBtnText] = React.useState('Copy');

  function handleCopy() {
    if (typeof window !== 'undefined' && window.navigator?.clipboard) {
      navigator.clipboard.writeText(text);

      setBtnText('Copied!');
      setTimeout(() => setBtnText('Copy'), 1000);
    }
  }

  return !inline && match ? (
    <div>
      <button onClick={handleCopy} className={styles.copyBtn} type="button">
        {btnText}
      </button>

      <SyntaxHighlighter style={Theme} language={match[1]}>
        {text}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className}>{children}</code>
  );
};
