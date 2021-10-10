/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

interface CodeProps {
  children: String & React.ReactNode;
  language: Language;
}

const CodeBlock: React.FC<CodeProps> = ({ children, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre
          className={className}
          style={{ ...style, padding: '20px', marginBottom: '20px' }}
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

export default CodeBlock;
