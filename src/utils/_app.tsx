import '@frontend/styles/global.scss';
import { useMounted } from '@frontend/hooks/useMounted';
import { isDevelopment } from '@frontend/utils/isDevelopment';
import '@frontend/styles/tokyo-night-dark.min.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import 'nprogress/nprogress.css';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  import('@frontend/services/googleAnalyticsService').then(
    ({ logWebVitals, initGoogleAnalytics }) => {
      initGoogleAnalytics(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
      logWebVitals(metric);
    },
  );
}

type Props = AppProps<{ dehydratedState: unknown }>;

const App = ({ Component, pageProps, router }: Props) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;
  const [queryClient] = useState(() => new QueryClient());

  useMounted(() => {
    import('@frontend/services/googleAnalyticsService').then(
      ({ initGoogleAnalytics, logPageView }) => {
        initGoogleAnalytics(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
        logPageView();
        router.events.on('routeChangeComplete', logPageView);
      },
    );
  });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router.events]);

  return (
    <ThemeProvider defaultTheme="system">
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
          <main id="main">
            <Component {...pageProps} />
          </main>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
