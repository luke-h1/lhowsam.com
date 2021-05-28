import '@src/styles/styles.scss';
import Nav from '@src/components/Nav';
import { DefaultSeo } from 'next-seo';
import * as gtag from '@src/utils/gtag';
import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import type { AppProps } from 'next/app';
import { Footer } from '@src/components/theme/Footer';
import { ChakraProvider, Flex } from '@chakra-ui/react';

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
      <DefaultSeo
        titleTemplate="%s | lhowsam.com"
        description="Luke Howsam - Software tester & developer"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://lhowsam.com',
          description: 'Luke Howsam - Software tester & developer',
          site_name: 'Luke Howsam',
          images: [
            {
              url: 'https://lhowsam.com/icons/logo.png',
              alt: 'Site Logo',
            },
          ],
        }}
        twitter={{
          handle: '@LukeH_1999',
          site: '@LukeH_1999',
          cardType: 'summary_large_image',
        }}
      />
      <ChakraProvider>
        <Nav />
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Component {...pageProps} />
        </Flex>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
