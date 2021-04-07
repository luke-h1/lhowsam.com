import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import * as gtag from '@utils/gtag';
import Footer from '@src/components/Footer';
import { Nav } from '@src/components/Nav/NavBar';
import MDXComponents from '@src/components/MDXComponents';
import '../src/styles/index.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

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
      <ThemeProvider attribute="class">
        <DefaultSeo
          titleTemplate="%s | lhowsam.com"
          description="Luke Howsam - Software tester & developer"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://lhowsam.com',
            description: 'Luke Howsam - Software tester & developer',
            site_name: 'Luke Howsam',
            images: [
              {
                url: 'https://lhowsam.com/static/images/logo.png',
                alt: 'Site Logo',
              },
            ],
          }}
          twitter={{
            handle: '@LukeH_1999',
            site: '@LukeH_1999',
            cardType: 'summary_large_image',
          }}
        />
        <div className="bg-white dark:bg-dark-100">
          <MDXProvider components={MDXComponents}>
            <Nav />
            <div className="flex flex-col align-center items-center place-items-center">
              <Component {...pageProps} />
            </div>
            <Footer />
          </MDXProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
