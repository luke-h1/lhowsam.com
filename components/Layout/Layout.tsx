import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Nav from '../Nav/Nav';
import MDXComponents from '../MDXComponents/MDXComponents';
import Footer from '../Footer/Footer';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { theme } from '../../styles/Theme';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Nav theme={theme} />
          {children}
          <Footer theme={theme} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};
export default Layout;
