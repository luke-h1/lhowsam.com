/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
AboutContainer,
AboutFlex,
AboutIntro,
} from './AboutElements';
const About = ({theme}) => { 
  return ( 
    <ThemeProvider theme={theme}>
    <>
    <AboutContainer>
      <AboutIntro>
        <h1>About</h1>
      </AboutIntro>
      <AboutFlex>
      <h1
        style={{ color: '#000' }}
      >TODO: NEW ABOUT COMPONENT TO GO HERE</h1>        
      </AboutFlex>
    </AboutContainer>
    </>
    </ThemeProvider>
  )
}
export default About;