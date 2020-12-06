/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default ({ children }) => (
  <Highlight {...defaultProps} code={children} language="javascript">
    {({
      className, style, tokens, getLineProps, getTokenProps,
    }) => (
      <pre className={className} style={{ ...style, padding: '20px' }}>
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
