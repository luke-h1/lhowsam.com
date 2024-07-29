import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import {} from 'next-router-mock';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React, { ReactElement, ReactNode } from 'react';

export interface CustomRenderResult extends RenderResult {
  user: UserEvent;
}

const DefaultWrapper = ({ children }: { children?: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemeProvider attribute="class">{children}</NextThemeProvider>
    </QueryClientProvider>
  );
};

/**
 * Custom test render function that is pre-configured with any contexts
 * that would otherwise create unnecessary boilerplate.
 */
export default function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): CustomRenderResult {
  return {
    ...(baseRender(ui, {
      wrapper: ({ children }) => <DefaultWrapper>{children}</DefaultWrapper>,
      ...options,
    }) as RenderResult),
    user: userEvent.setup(),
  };
}
