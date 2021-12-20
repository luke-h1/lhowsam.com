import type { AppProps } from 'next/app';

const App = ({ Component, pageProps, router }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
