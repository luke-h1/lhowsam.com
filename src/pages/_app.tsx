import { DefaultSeo } from 'next-seo';
import * as gtag from '@src/utils/gtag';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { constants } from '@src/data/constants';
import '@fontsource/Raleway/400.css';
import '@fontsource/Raleway/600.css';
import '@fontsource/Raleway/700.css';
import '@fontsource/Raleway/800.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Layout from '@src/components/Layout';
import theme from '@src/styles/theme';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@src/components/MDXComponents';
import GlobalStyle from '@src/styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <ChakraProvider resetCSS theme={theme}>
          <MDXProvider components={MDXComponents}>
            <GlobalStyle>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </GlobalStyle>
          </MDXProvider>
        </ChakraProvider>
      </ColorModeProvider>
    </>
  );
};

export default MyApp;
