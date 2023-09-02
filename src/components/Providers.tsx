'use client';

import { ToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useState } from 'react';
import Gradient from './Gradient/Gradient';
import SkipLink from './SkipLink/SkipLink';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(queryClient);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
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
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
