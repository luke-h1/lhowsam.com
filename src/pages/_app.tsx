import type { AppProps } from 'next/app';
import '@src/styles/global.css';
import '@src/styles/prism.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
