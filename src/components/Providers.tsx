'use client';

import { NavigationContextProvider } from '@frontend/context/NavigationContext';
import { ToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

import { ReactNode } from 'react';
import Gradient from './Graident/Gradient';
import SkipLink from './SkipLink/SkipLink';
import VercelAnalytics from './VercelAnalytics';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <ThemeProvider attribute="class" defaultTheme="system">
          <ToastProvider>
            <TooltipProvider>
              <SkipLink />
              <Gradient />
              <NavigationContextProvider>{children}</NavigationContextProvider>
            </TooltipProvider>
          </ToastProvider>
        </ThemeProvider>
      </MotionConfig>
      <VercelAnalytics />
    </>
  );
};

export default Providers;
