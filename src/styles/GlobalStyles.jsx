/* eslint-disable */
import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { PrimaryFont } from "./Fonts"
import { primaryBackgroundColor } from './Themes';
import AvantGarde from "../fonts/ITCAvantGardeStd-XLt.woff2"

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * { 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
    /* line-height: 1.4; */
    box-sizing: border-box;

  }

  

  *, *:before, *:after { 
    box-sizing: inherit;
    
  }
  body {
    font-family: ${PrimaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${primaryBackgroundColor};
    overflow-x: hidden;  
    @font-face {
    font-family: ${PrimaryFont};
    src: url(${AvantGarde}) format('truetype');
 }
  }

`
