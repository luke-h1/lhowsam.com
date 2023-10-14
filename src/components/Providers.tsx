'use client';

import { ToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { MotionConfig } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import Gradient from './Gradient/Gradient';
import SkipLink from './SkipLink/SkipLink';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
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
  );
};

export default Providers;
