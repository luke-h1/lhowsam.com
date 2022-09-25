import Ga from '@src/components/Ga';
import * as gtag from '@src/utils/gtag';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '@fontsource/poppins';
import '@src/styles/global.scss';

const App = ({ Component, pageProps, router }: AppProps) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;
  const [queryClient] = useState(() => new QueryClient());

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
    <QueryClientProvider client={queryClient}>
      <Hydrate
        state={
          (pageProps as unknown as { dehydratedState: never }).dehydratedState
        }
      >
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
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Ga />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};
export default App;
