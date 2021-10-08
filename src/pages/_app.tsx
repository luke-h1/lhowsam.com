import { DefaultSeo } from 'next-seo';
import * as gtag from '@src/utils/gtag';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '@src/styles/global.scss';
import { constants } from '@src/data/constants';
import Nav from '@src/components/Nav';
import Menu from '@src/components/Menu';

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
      <Nav />
      <Menu />
      <div id="container" className="container">
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
