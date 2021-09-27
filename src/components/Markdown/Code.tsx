import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-async-light';
import Theme from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

interface Props {
  children: React.ReactNode;
  inline: boolean;
  className: string;
}

export const Code = ({ children, inline, className }: Props) => {
  const match = /language-(\w+)/.exec(className || '');
  const text = String(children).replace(/\n$/, '');
  const [buttonText, setButtonText] = useState<string>('copy');

  function handleCopy() {
    if (typeof window !== 'undefined' && window.navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setButtonText('Copied!');
      setTimeout(() => setButtonText('copy'), 1000);
    }
  }
  return !inline && match ? (
    <div>
      <button onClick={handleCopy} type="button">
        {buttonText}
      </button>
      <SyntaxHighlighter
        style={Theme}
        language={match[1]}
        {...children}
        {...inline}
        {...className}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className}>{children}</code>
  );
};
