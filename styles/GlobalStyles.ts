import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    * { 
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html { 
        box-sizing: border-box;
        font-size: 16px;
        scroll-behavior: smooth;
    }
    *, *:before, *:after { 
        box-sizing: inherit;
    }

    body { 
        font-family: "Noto Sans JP";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #fff;
    }
    a { 
        color: #000;
        text-decoration: none;
        padding: 0;
        margin: 0;
        &:hover {
            text-decoration: underline ;
        }
    }
`;
