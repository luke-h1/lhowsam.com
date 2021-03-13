import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from '@components/Header/Header';
import Footer from '@components/Footer';
import * as gtag from '@utils/gtag';
import { Reset } from 'styles/reset';
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
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        {Reset}
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
