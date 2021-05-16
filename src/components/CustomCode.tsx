/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import theme from 'prism-react-renderer/themes/nightOwl';

interface CodeProps {
  children: String & React.ReactNode;
  className: String;
}

export const CustomCode: React.FC<CodeProps> = ({ children, className }) => {
  const language: any = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
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
  );
};
