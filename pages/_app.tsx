import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import * as gtag from '@utils/gtag';
import Footer from '@src/components/Footer';
import { Nav } from '@src/components/Nav/NavBar';
import MDXComponents from '@src/components/MDXComponents';
import '../src/styles/index.css';

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
      <MDXProvider components={MDXComponents}>
        <Nav />
        <div className="flex flex-col align-center items-center">
          <Component {...pageProps} />
        </div>
        <Footer />
      </MDXProvider>
    </>
  );
}

export default MyApp;
