import { GlobalStyle } from "../styles/GlobalStyles";
import Nav from '../components/Nav/Nav';
import { theme } from '../styles/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav theme={theme} /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
