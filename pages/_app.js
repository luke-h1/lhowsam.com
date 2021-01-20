import { GlobalStyle } from "../styles/GlobalStyles";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'
import { theme } from '../styles/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav theme={theme} /> 
      <Component {...pageProps} />
      <Footer theme={theme} /> 
    </>
  );
}

export default MyApp;
