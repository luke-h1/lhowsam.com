import { initGA, logPageView } from '@src/utils/analytics';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/global.css';
import '../styles/prism.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  useEffect(() => {
    initGA();
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!router.asPath.includes('?')) {
      logPageView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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

      <Component {...pageProps} />
    </>
  );
};
export default App;
