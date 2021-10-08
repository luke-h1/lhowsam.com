/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react';
import theme from 'prism-react-renderer/themes/vsDark';
import styles from '@src/styles/blog.module.scss';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
  children: String & React.ReactNode;
  inline: boolean;
  className: string;
}

const Code = ({ children, className, inline }: Props) => {
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

      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.trim()}
        language="typescript"
      >
        {({
          className, style, tokens, getLineProps, getTokenProps,
        }) => (
          <pre
            className={className}
            style={{
              ...style,
              overflow: 'scroll',
              marginTop: 20,
              padding: 20,
              marginBottom: 20,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  ) : (
    <code className={className}>{children}</code>
  );
};
export default Code;
