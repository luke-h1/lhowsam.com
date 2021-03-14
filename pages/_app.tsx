import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as gtag from '@utils/gtag';
import Footer from '@src/components/Footer';
import { Reset } from '@src/styles/reset';
import Header from '@src/components/Header/Header';
import MDXComponents from '@src/components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {Reset}
      <MDXProvider components={MDXComponents}>
        <ChakraProvider resetCSS theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </MDXProvider>
    </>
  );
}

export default MyApp;
