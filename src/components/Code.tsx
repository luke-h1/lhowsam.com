/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

interface CodeProps {
  children: String & React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
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
  );
};

export default Code;
