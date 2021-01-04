/* eslint-disable max-len */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../helpers/Button/Button';
import SEO from '../seo';

import {
  HeroContainer,
  IntroContainer,
  BlurbContainer,
  Intro,
} from './HeroElements';

const Hero: React.FC<{theme: String}> = (props) => {
  const theme = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Home" />

        <HeroContainer>
          <IntroContainer>
            <h1>Hi, I'm Luke</h1>
            <BlurbContainer>
              <Intro>I'm passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies</Intro>
              <Button
                style={{
                  width: '200px', marginTop: '1rem', alignItems: 'center', textAlign: 'center',
                }}
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
};

export default Hero;
