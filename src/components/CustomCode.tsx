/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { Button, useClipboard } from '@chakra-ui/react';

export const CopyButton = (value: any) => {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button aria-label="Copy text" role="button" onClick={onCopy}>
      {hasCopied ? 'Copied' : 'Copy'}
    </Button>
  );
};

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
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          <CopyButton value={children.trim()} />
        </pre>
      )}
    </Highlight>
  );
};
