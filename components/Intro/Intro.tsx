import React from 'react';
import { ThemeProvider } from '@emotion/react';
import {
  HighLight, DescWrap, Title,
} from './IntroStyles';

const Intro = ({ theme }) => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="flex flex-col justify-center items-center mb-8">
          <Title>
            Hi, I'm
            {' '}
            <HighLight>Luke</HighLight>
          </Title>
          <DescWrap>
            <p
              data-testid="intro"
              className="text-center items-center max-w-7xl min-w-1/4"
            >
              I'm passionate about solving technical problems and coming up with
              creative solutions.I enjoy working with the JAMstack, React, Node,
              testing technologies + practices & various dev-ops technologies
            </p>
          </DescWrap>
        </div>
      </>
    </ThemeProvider>
  );
};
export default Intro;
