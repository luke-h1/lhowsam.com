import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import constants from '../constants';
import '../styles/global.css';
import '../styles/prism.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | lhowsam.com"
        title={constants.site}
        canonical={canonicalUrl}
        description="Luke Howsam is a QA engineer and software developer who specializes in Javascript, Typescript, GraphQL, cloud technologies & automated + manual testing"
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
              alt: constants.site,
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
