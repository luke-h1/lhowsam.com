'use client';

import { store } from '@frontend/store';
import { ToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { MotionConfig } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import Gradient from './Gradient/Gradient';
import SkipLink from './SkipLink/SkipLink';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
          />
        </Head>
        <MotionConfig reducedMotion="user">
          <ToastProvider>
            <TooltipProvider>
              <SkipLink />
              <Gradient />
              <main id="main">{children}</main>
            </TooltipProvider>
          </ToastProvider>
        </MotionConfig>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
