/* eslint-disable */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
const SyntaxHiglight = (props) => (
  <Highlight
    {...defaultProps}
    // theme={theme}
    code={props.children.trim()}
    language="jsx"
  >
    {({
      className, style, tokens, getLineProps, getTokenProps,
    }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
const Code = (props) => <SyntaxHiglight {...props} />;
export default Code;
