import { DefaultSeo } from 'next-seo';
import * as gtag from '@src/utils/gtag';
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { constants } from '@src/data/constants';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import Wrapper from '@src/components/Wrapper';
import theme from '@src/styles/theme';

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
        description="Luke Howsam"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://lhowsam.com',
          description: constants.intro,
          site_name: 'Luke Howsam',
          images: [
            {
              url: 'https://lhowsam.com/icons/logo.png',
              alt: 'Site Logo',
            },
          ],
        }}
      />
      <ChakraProvider theme={theme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
