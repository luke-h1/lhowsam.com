import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import * as gtag from '@src/utils/gtag';
import { Reset } from '@src/styles/Reset';

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
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
