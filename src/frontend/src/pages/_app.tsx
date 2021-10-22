import { MDXProvider } from '@mdx-js/react';
import Navbar from '@src/components/Navbar';
import MDXComponents from '@src/components/mdx/index';
import { constants } from '@src/data/constants';
import { GlobalStyles } from '@src/styles';
import { Layout } from '@src/styles/layouts';
import { GlobalThemeObject, ThemeObjectInitial } from '@src/types/styled';
import * as gtag from '@src/utils/gtag';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
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

const initTheme = {
  theme: undefined,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        titleTemplate={`%s | ${constants.site}`}
        defaultTitle={constants.site}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          description: constants.intro,
          site_name: constants.site,
          images: [
            {
              url: 'https://lhowsam.com/icons/logo.png',
              alt: 'Site Logo',
            },
          ],
        }}
        twitter={{ 
          site: '@LukeH_1999',
          cardType: 'summary_large_image'
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
