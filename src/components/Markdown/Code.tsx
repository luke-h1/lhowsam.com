/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-async-light';
import Theme from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

interface CodeProps {
  children: React.ReactNode;
  inline: boolean;
  className: string;
}

const Code = (props: CodeProps) => {
  const { children, inline, className } = props;
  const match = /language-(\w+)/.exec(className || '');
  const text = String(children).replace(/\n$/, '');
  const [buttonText, setButtonText] = React.useState<string>('Copy');

  function handleCopy() {
    if (typeof window !== 'undefined' && window.navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setButtonText('Copied');
      setTimeout(() => setButtonText('Copy'), 1000);
    }
  }
  return !inline && match ? (
    <div>
      <button onClick={handleCopy} type="button">
        {text}
      </button>
      <SyntaxHighlighter style={Theme} language={match[1]} {...props}>
        {buttonText}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className}>{props.children}</code>
  );
};
export default Code;
