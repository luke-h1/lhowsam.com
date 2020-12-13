/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont, titleFont} from './typography';
import PtSans from '../fonts/PTSans-Regular.ttf';
import AmaticSC from '../fonts/AmaticSC-Bold.ttf';
export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
} 
html { 
  font-size: 16px;
  box-sizing: border-box;
}

*, *:before *:after { 
  box-sizing: inherit;
}



body {
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 
  overflow-x: hidden;  
  @font-face {
    font-family: ${primaryFont};
    src: url(${PtSans}) format('truetype');
 }
}

h1,
h2,
h3 { 
  font-weight: 700;
  font-family: ${AmaticSC};
  @font-face {
    font-family: ${titleFont};
    src: url(${AmaticSC}) format('truetype');
 }
}

`;
