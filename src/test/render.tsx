// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React, { FC, ReactElement, ReactNode } from 'react';

export interface CustomRenderResult extends RenderResult {
  user: UserEvent;
}

const DefaultWrapper: FC = ({ children }: { children?: ReactNode }) => {
  return (
    <NextThemeProvider attribute="class">
      {/* <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> */}
      {children}
    </NextThemeProvider>
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
      wrapper: DefaultWrapper,
      ...options,
    }) as RenderResult),
    user: userEvent.setup(),
  };
}
