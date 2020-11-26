/* eslint-disable */

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';
import { lightTheme, darkTheme } from './Themes';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${
    lightTheme ? lightTheme.backgroundColor : darkTheme.backgroundColor
  };
  overflow-x: hidden;  

}
`;
