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
    box-sizing: border-box;

  }

  *, *:before, *:after { 
    box-sizing: inherit;
    
  }
  body {
    font-family: ${PrimaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F6F7F8;
    overflow-x: hidden;  
    @font-face {
    font-family: ${PrimaryFont};
    src: url(${AvantGarde}) format('truetype');
 }
  }

  /* pre { 
    background:#141424;
    color: #fff;
    padding: 0.5rem;
    margin: 10px 0 10px 0;
    font-size: 1em; /* 2 */

  } */

`
