import 'the-new-css-reset';
import '@frontend/styles/app.css';
import '@frontend/styles/tokyo-night-dark.min.css';
import '@fontsource/poppins';
import Banner from '@frontend/components/Banner/Banner';
import CommandMenu from '@frontend/components/CommandMenu/CommandMenu';
import Footer from '@frontend/components/Footer/Footer';
import Providers from '@frontend/components/Providers';
import { Toaster } from '@frontend/components/Toast/Toast';
import siteConfig from '@frontend/config/site';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
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
        url: `${process.env.NEXT_PUBLIC_URL}/og.jpg`, // TODO LH: - create this
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    images: [`${process.env.NEXT_PUBLIC_URL}/og.jpg`],
    creator: '@LukeH_1999',
  },
  icons: {
    icon: '/favicon.ico', // TODO LH - create
    shortcut: '/favicon-16x16.png', // TODO LH - create
    apple: '/apple-touch-icon.png', // TODO LH - create
  },
  manifest: `${process.env.NEXT_PUBLIC_URL}/site.wwebmanifest`, // TODO LH - create this
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
      <div className="container">
        <Banner />
        <main id="main">
          <Providers>{children}</Providers>
        </main>
        <CommandMenu />
        <Toaster />
      </div>
      <Footer />
    </html>
  );
};
export default RootLayout;
