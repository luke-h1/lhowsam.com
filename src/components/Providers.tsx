'use client';

import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
  Hydrate,
} from '@tanstack/react-query';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <ThemeProvider defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
            />
          </Head>
          <main id="main">{children}</main>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default Providers;
