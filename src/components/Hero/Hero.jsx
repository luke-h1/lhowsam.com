/* eslint-disable */
import React from 'react';
import { ThemeProvider, css } from 'styled-components/macro';
import { Button } from '../../helpers/Button/Button';
import {
  HeroContainer,
  IntroContainer,
  BlurbContainer,

} from './HeroElements';

const Hero = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <>
      <HeroContainer>
        <IntroContainer>
          <h1>Hi, I'm Luke</h1>
          <BlurbContainer>
            <p>I'm passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies</p>
            <Button
              css={`
              width: 200px;
              margin-top: 1rem;
              align-items: center;
              text-align: center;
              `}
              round="true"
              primary="true"
              bold="true"
              to="/about"
            >
              More About Me
            </Button>
          </BlurbContainer>
        </IntroContainer>
      </HeroContainer>
    </>
  </ThemeProvider>
);
export default Hero;
