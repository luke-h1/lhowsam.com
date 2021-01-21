/* eslint-disable max-len */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  IntroWrapper, HighLight, DescWrap, Title,
} from './IntroStyles';

const Intro = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <>
      <IntroWrapper>
        <Title>
          Hi, I'm
          {' '}
          <HighLight>Luke</HighLight>
        </Title>

        <DescWrap>
          <p>
            I'm passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies
          </p>
        </DescWrap>
      </IntroWrapper>
    </>
  </ThemeProvider>
);
export default Intro;
