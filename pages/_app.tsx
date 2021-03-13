import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import * as gtag from '../utils/gtag';

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
        openGraph={{
          type: 'website',
          locale: 'en_gb',
          url: 'https://lhowsam.com',
          site_name: 'lhowsam',
        }}
        twitter={{
          handle: '@lukeH_1999',
          site: '@twitter',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
