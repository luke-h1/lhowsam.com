import 'the-new-css-reset';
import '@frontend/styles/app.css';
import '@frontend/styles/prism.css';
import Providers from '@frontend/components/Providers';
import siteConfig from '@frontend/config/site';
import getPolicies from '@frontend/utils/getPolicies';
// import newrelic from 'newrelic';
import { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';

interface Props {
  children: Readonly<ReactNode>;
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_URL as unknown as URL,
  title: {
    default: siteConfig.name,
    template: `%s | lhowsam.com`,
  },
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: 'Luke Howsam',
      url: 'https://lhowsam.com',
    },
  ],
  creator: 'Luke Howsam',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    title: siteConfig.name,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/icons/logo.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    images: [`${process.env.NEXT_PUBLIC_URL}/icons/logo.png`],
    creator: '@LukeH_1999',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'VXnRb79aLIbpTSPg8tRVx5KMcECv8hLJPYW0f3X4KKI',
  },
  robots: getPolicies(),
};

const RootLayout = async ({ children }: Props) => {
  // // @ts-expect-error - trying to import newrelic.js file
  // if (newrelic.agent.collector.isConnected() === false) {
  //   await new Promise(resolve => {
  //     // @ts-expect-error - trying to import newrelic.js file
  //     newrelic.agent.on('connected', resolve);
  //   });
  // }

  // // @ts-expect-error - trying to import newrelic.js file
  // const browserTimingHeader = newrelic.getBrowserTimingHeader({
  //   hasToRemoveScriptWrapper: true,
  //   allowTransactionlessInjection: true,
  // });
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="/icons/favicon-16x16.png" rel="icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/maskable.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="description"
          content="Luke Howsam is a software engineer and software developer who specializes in Javascript, Typescript, GraphQL, cloud technologies & automated + manual testing"
        />
        {process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com' && (
          <>
            {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} /> */}
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            />

            <Script id="google-analytics">
              {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
      `}
            </Script>
          </>
        )}
        {/* <Script
          id="nr-browser-agent"
          dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
        /> */}
      </head>
      <body>
        <main id="main">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
