import 'the-new-css-reset';
import '@frontend/styles/app.css';
import '@frontend/styles/tokyo-night-dark.min.css';
import '@fontsource/poppins';
import siteConfig from '@frontend/config/site';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import Banner from './(components)/Banner/Banner';
import CommandMenu from './(components)/CommandMenu/CommandMenu';
import Footer from './(components)/Footer/Footer';
import Providers from './(components)/Providers';
import { Toaster } from './(components)/Toast/Toast';

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_URL as unknown as URL,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
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
    url: 'TODO - fetch this dynamically',
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
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body>
        <Providers>
          <div className="container">
            <Banner />
            <main id="main">{children}</main>
            <CommandMenu />
            <Toaster />
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
