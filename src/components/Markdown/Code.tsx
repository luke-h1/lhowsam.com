/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import styled from '@emotion/styled';

interface CodeProps {
  children: String & React.ReactNode;
}

const Pre = styled.pre`
  text-align: left;
  margin: 1em 1em;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children.trim()}
        language="typescript"
      >
        {({
          className, style, tokens, getLineProps, getTokenProps,
        }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
