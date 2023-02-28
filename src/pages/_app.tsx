import 'the-new-css-reset';
import Banner from '@frontend/components/Banner/Banner';
import CommandMenu from '@frontend/components/CommandMenu/CommandMenu';
import Gradient from '@frontend/components/Graident/Gradient';
import SkipLink from '@frontend/components/SkipLink/SkipLink';
import { Toaster } from '@frontend/components/Toast/Toast';
import gtagService from '@frontend/utils/gtag';
import { isDevelopment } from '@frontend/utils/isDevelopment';
import { ToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import '@frontend/styles/app.css';
import '@frontend/styles/tokyo-night-dark.min.css';

const Footer = dynamic(() => import('@frontend/components/Footer/Footer'));

type Props = AppProps<{ dehydratedState: unknown }>;

const App = ({ Component, pageProps, router }: Props) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`;
  const [queryClient] = useState(() => new QueryClient());
  const [open, setOpen] = useState<boolean>(false);

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
        <MotionConfig reducedMotion="user">
          <ThemeProvider attribute="class" defaultTheme="system">
            <ToastProvider>
              <TooltipProvider>
                <SkipLink />
                <Gradient />
                <div className="container">
                  <Banner setOpen={setOpen} />
                  <main id="main">
                    <Component {...pageProps} />
                  </main>
                  <CommandMenu open={open} setOpen={setOpen} />
                  <Toaster />
                </div>
                <Footer />
              </TooltipProvider>
            </ToastProvider>
          </ThemeProvider>
        </MotionConfig>
        <Analytics />
      </Hydrate>
    </QueryClientProvider>
  );
};
export default App;
