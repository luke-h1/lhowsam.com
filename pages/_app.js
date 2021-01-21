/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyles';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { theme } from '../styles/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav theme={theme} />
        <Component {...pageProps} />
        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
