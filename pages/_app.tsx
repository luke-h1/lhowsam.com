import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { GlobalStyle } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Nav theme={theme} />
        <Component {...pageProps} {...theme}  />
        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
