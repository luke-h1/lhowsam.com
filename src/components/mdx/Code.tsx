/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import { breakpoint } from '@src/utils/style';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React from 'react';
import styled, { css } from 'styled-components';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

const CodeBlockLanguageWrapper = styled.span`
  float: right;
  background-color: #2c2c2c;
  color: #bbbbbb;
  margin-top: -15px;
  padding: 7.5px 5px;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
`;

const CodePreBlockWithHighlight = styled.pre`
  padding: 20px;
  margin: 1rem -20px;
  border-radius: var(--border-radius);
  overflow-x: scroll;
  white-space: pre-wrap;
  word-wrap: break-word; 
  .highlight-line {
    background-color: rgb(255, 2555, 255, 0.07);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.3em solid #9d86e9;
  }
`;

const CodeblockLineNumber = styled.span`
  display: inline-block;
  padding-right: 0.6em;
  min-width: 1rem;
  user-select: none;
  text-align: center;
  ${breakpoint.until.md(css`
    display: none;
  `)}
`;

const CodeblockLineWrapper = styled.div`
  & > ${CodeblockLineNumber} {
    color: #424242;
  }
`;

type MDXProviderCodeProps = {
  children: {
    props: {
      children: string;
      className: string;
      originalType: string;
      parentName: string;
      metastring?: string;
      mdxType: string;
      filename?: string;
      [key: string]: unknown;
    }
  }
}

/*
 pattern for highlighting lines in code blocks
 Usage: lang {2, 4-5}
*/

const LINE_HIGHLIGHT_REGEX = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta = '') => {
  const regExpExecArr = LINE_HIGHLIGHT_REGEX.exec(meta);
  if (!LINE_HIGHLIGHT_REGEX.test(meta) || regExpExecArr === null) {
    return () => false;
  }
  const lineNumbers = regExpExecArr[1].split(',').map((v) => v.split('-').map((v) => parseInt(v, 10)));
  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) => (end ? lineNumber >= start && lineNumber <= end : lineNumber === start));
    return inRange;
  };
};

const Code = (props: MDXProviderCodeProps) => {
  const {
    children: {
      props: { children, className, metastring },
    },
  } = props;

  const language = className.replace(/language-/, '');
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language as Language}
      theme={nightOwl}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <CodePreBlockWithHighlight {...{ style, className }}>
          <CodeBlockLanguageWrapper>{language}</CodeBlockLanguageWrapper>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} highlight-line`;
            }
            return (
              <CodeblockLineWrapper {...lineProps} key={i}>
                <CodeblockLineNumber>{i + 1}</CodeblockLineNumber>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </CodeblockLineWrapper>
            );
          })}
        </CodePreBlockWithHighlight>
      )}
    </Highlight>
  );
};
export default Code;
