/* eslint-disable */
import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { PrimaryFont } from "./Fonts"
import AvantGarde from "../fonts/ITCAvantGardeStd-XLt.woff2"

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * { 
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 18px;
    line-height: 1.4;
    box-sizing: border-box;

  }

  html,
  body { 
       /* remove margin for the main div that gatsby mounts into */
       > div {
              margin-top: 0;
            }
  }

  *, *:before, *:after { 
    box-sizing: inherit;
    
  }
  body {
    font-family: ${PrimaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.primaryBackgroundColor};
    overflow-x: hidden;  
    @font-face {
    font-family: ${primaryFont};
    src: url(${AvantGarde}) format('truetype');
 }
  }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
`
