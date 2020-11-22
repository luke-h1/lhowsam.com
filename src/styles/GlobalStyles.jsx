import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';
import { normalize } from 'polished';

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
}
`;
