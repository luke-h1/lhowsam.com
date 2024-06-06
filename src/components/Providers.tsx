'use client';

import composeProviders from '@frontend/hocs/composeProviders';
import { isServer } from '@frontend/hooks/isServer';
import { store } from '@frontend/store';
import { ToastProvider as RadixToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider as RadixTooltipProvider } from '@radix-ui/react-tooltip';
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { MotionConfig as FramerMotionConfig } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import posthog from 'posthog-js';
import { PostHogProvider as BasePostHogProvider } from 'posthog-js/react';
import { ReactNode, useState } from 'react';
import { Provider } from 'react-redux';
import Gradient from './Gradient/Gradient';
import SkipLink from './SkipLink/SkipLink';

interface Props {
  children: ReactNode;
}

if (!isServer) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    loaded: app => {
      if (process.env.NODE_ENV === 'development') {
        app.debug();
      }
    },
  });
}

function ThemeProvider({ children }: { children: ReactNode }) {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}

function PostHogProvider({ children }: { children: ReactNode }) {
  return <BasePostHogProvider client={posthog}>{children}</BasePostHogProvider>;
}

function MotionConfig({ children }: { children: ReactNode }) {
  return (
    <FramerMotionConfig reducedMotion="user">{children}</FramerMotionConfig>
  );
}

function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

function ToastProvider({ children }: { children: ReactNode }) {
  return <RadixToastProvider>{children}</RadixToastProvider>;
}

function TooltipProvider({ children }: { children: ReactNode }) {
  return <RadixTooltipProvider>{children}</RadixTooltipProvider>;
}

function QueryClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <BaseQueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </BaseQueryClientProvider>
  );
}

const ComposedProviders = composeProviders(
  ThemeProvider,
  MotionConfig,
  ToastProvider,
  TooltipProvider,
  PostHogProvider,
  ReduxProvider,
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
