import { MDXProvider } from '@mdx-js/react';
import Navbar from '@src/components/Navbar';
import MDXComponents from '@src/components/mdx/index';
import { GlobalStyles } from '@src/styles';
import { Layout } from '@src/styles/layouts';
import { GlobalThemeObject, ThemeObjectInitial } from '@src/types/styled';
import * as gtag from '@src/utils/gtag';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

import { ThemeProvider } from 'styled-components';

import '@src/styles/prism.css';
import constants from '@src/constants';

const initTheme = {
  theme: undefined,
};

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  const [themeObject, setThemeObject] = useState<ThemeObjectInitial>(initTheme);

  const getCSSVarValue = (variable: string) => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.body).getPropertyValue(variable);
    }
    return undefined;
  };
  const changeThemeVariant: GlobalThemeObject['changeThemeVariant'] = (
    theme
  ) => {
    setThemeObject({ theme });
  };
  const themeForContext: GlobalThemeObject = {
    ...themeObject,
    getCSSVarValue,
    changeThemeVariant,
  };

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
        title={constants.site}
        canonical={canonicalUrl}
        description={constants.intro}
        openGraph={{
          profile: {
            firstName: 'Luke',
            lastName: 'Howsam',
            username: 'luke-h1',
          },
          type: 'website',
          locale: 'en_GB',
          url: canonicalUrl,
          description: constants.intro,
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

      <MDXProvider components={MDXComponents}>
        <GlobalStyles />
        <ThemeProvider theme={themeForContext}>
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MDXProvider>
    </>
  );
};

export default MyApp;
