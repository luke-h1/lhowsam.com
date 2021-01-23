import React from "react";
import { GlobalStyle } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
