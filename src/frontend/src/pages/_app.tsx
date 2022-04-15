import * as gtag from '@src/utils/gtag';
import '@src/styles/global.scss';
import '@src/styles/prism.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import '@fontsource/ibm-plex-sans';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

const App = ({ Component, pageProps, router }: AppProps) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

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
    <ThemeProvider defaultTheme="system">
      <DefaultSeo
        titleTemplate="%s | lhowsam.com"
        title="lhowsam.com"
        canonical={canonicalUrl}
        openGraph={{
          profile: {
            firstName: 'Luke',
            lastName: 'Howsam',
            username: 'luke-h1',
          },
          type: 'website',
          locale: 'en_GB',
          url: canonicalUrl,
          site_name: 'lhowsam.com',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/icons/logo.png`,
              alt: 'logo for lhowsam.com',
              width: 1200,
              height: 630,
            },
          ],
        }}
        twitter={{
          site: '@lukeH_1999',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
