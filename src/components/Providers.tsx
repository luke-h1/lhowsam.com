'use client';

import ToastContextProvider from '@frontend/context/ToastContext';
import composeProviders from '@frontend/hocs/composeProviders';
import { ToastProvider as RadixToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider as RadixTooltipProvider } from '@radix-ui/react-tooltip';
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { MotionConfig as FramerMotionConfig } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode, useState } from 'react';
import Gradient from './Gradient';
import SkipLink from './SkipLink';

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children }: { children: ReactNode }) {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}

function MotionConfig({ children }: { children: ReactNode }) {
  return (
    <FramerMotionConfig reducedMotion="user">{children}</FramerMotionConfig>
  );
}

function ToastProvider({ children }: { children: ReactNode }) {
  return <RadixToastProvider>{children}</RadixToastProvider>;
}

function TooltipProvider({ children }: { children: ReactNode }) {
  return <RadixTooltipProvider>{children}</RadixTooltipProvider>;
}

function QueryClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {},
      }),
  );

  return (
    <BaseQueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </BaseQueryClientProvider>
  );
}

function ToastCtxProvider({ children }: { children: ReactNode }) {
  return <ToastContextProvider>{children}</ToastContextProvider>;
}

const ComposedProviders = composeProviders(
  ThemeProvider,
  MotionConfig,
  ToastCtxProvider,
  ToastProvider,
  TooltipProvider,
  QueryClientProvider,
);

const Providers = ({ children }: Props) => {
  return (
    <ComposedProviders>
      <SkipLink />
      <Gradient />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <main id="main">{children}</main>
    </ComposedProviders>
  );
};

export default Providers;
