import type { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/prism.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};
export default App;
