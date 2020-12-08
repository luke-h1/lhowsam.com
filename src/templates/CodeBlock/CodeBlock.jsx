/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';
import theme from 'prism-react-renderer/themes/synthwave84';

export default ({ children }) => (
  <Highlight {...defaultProps} code={children} theme={theme} language="javascript">
    {({
      className, style,
    }) => (
      <pre
        className={className}
        style={{
          ...style, padding: '8px', margin: '5px', wordBreak: 'break-word',
        }}
      >
        {children}
      </pre>
    )}
  </Highlight>
);
