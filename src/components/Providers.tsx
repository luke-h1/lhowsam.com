'use client';

import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
  Hydrate,
} from '@tanstack/react-query';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  // TOOD: once Next.js exposes router.events in next/navigation, comment below back in
  // const router = useRouter();

  // useMounted(() => {
  //   import('@frontend/services/googleAnalyticsService').then(
  //     ({ initGoogleAnalytics, logPageView }) => {
  //       initGoogleAnalytics(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  //       logPageView();

  //       router.events.on('routeChangeComplete', logPageView);
  //     },
  //   );
  // });

  // useEffect(() => {
  //   const handleRouteStart = () => NProgress.start();
  //   const handleRouteDone = () => NProgress.done();

  //   router.events.on('routeChangeStart', handleRouteStart);
  //   router.events.on('routeChangeComplete', handleRouteDone);
  //   router.events.on('routeChangeError', handleRouteDone);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteStart);
  //     router.events.off('routeChangeComplete', handleRouteDone);
  //     router.events.off('routeChangeError', handleRouteDone);
  //   };
  // }, [router.events]);

  return (
    <ThemeProvider defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
            />
          </Head>
          <main id="main">{children}</main>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default Providers;
