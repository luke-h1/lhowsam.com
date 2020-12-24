/* eslint-disable */
import React from 'react';
import { Button } from '../../helpers/Button/Button';
import { ThemeProvider, css } from 'styled-components/macro';
import {
  HeroContainer,
  IntroContainer,
  ButtonWrapper,
  BlurbContainer,

} from './HeroElements';

const Hero = ({theme}) => {
  return (
    <ThemeProvider theme={theme}>
    <>
    <HeroContainer>
      <IntroContainer>
        <h1>Hi, I'm Luke</h1>
        <BlurbContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima at nulla quis quam eaque maxime dignissimos rerum? Laudantium, sint vel? Soluta adipisci fugiat quas! Accusantium impedit ab quis enim?</p>
        <Button

        css={`
        width: 200px;
        margin-top: 1rem;
        `}
          round='true'
          primary='true'
          bold='true'
          to='/about'
        >More About Me</Button>
        </BlurbContainer>
      </IntroContainer>
    </HeroContainer>
    </>
    </ThemeProvider>
  )
}
export default Hero;