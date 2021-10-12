import React from 'react';
import { Global, css } from '@emotion/react';
import { useColorMode } from '@chakra-ui/react';
import { prismDarkTheme, prismLightTheme } from './prism';

const GlobalStyle = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};
export default GlobalStyle;
