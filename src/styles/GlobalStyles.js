/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { PrimaryFont } from './Fonts';
import NotoSans from '../fonts/NotoSansJP-Regular.otf';

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
        scroll-behavior: smooth;
    }
    *, *:before, *:after { 
        box-sizing: inherit;
    }
    body { 
        font-family: ${PrimaryFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #fff;
        @font-face {
            font-family: ${PrimaryFont};
            src: url(${NotoSans}) format('truetype');
        }
    }
`;
