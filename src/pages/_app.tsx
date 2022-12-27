import HeaderContextProvider from '@frontend/context/HeaderContext';
import gtagService from '@frontend/utils/gtag';
import { isDevelopment } from '@frontend/utils/isDevelopment';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '@fontsource/poppins';
import '@frontend/styles/global.scss';

type Props = AppProps<{ dehydratedState: unknown }>;

const App = ({ Component, pageProps, router }: Props) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtagService.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultSeo
          titleTemplate="%s | lhowsam.com"
          title="lhowsam.com"
          canonical={canonicalUrl}
          dangerouslySetAllPagesToNoFollow={isDevelopment}
          dangerouslySetAllPagesToNoIndex={isDevelopment}
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
                url: `${process.env.NEXT_PUBLIC_URL}/icons/logo.png`,
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
            content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
          />
        </Head>
        <HeaderContextProvider>
          <Component {...pageProps} />
        </HeaderContextProvider>
        <Analytics />
      </Hydrate>
    </QueryClientProvider>
  );
};
export default App;
