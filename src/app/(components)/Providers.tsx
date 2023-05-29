/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { NavigationContextProvider } from '@frontend/context/NavigationContext';
// import { useMounted } from '@frontend/hooks/useMounted';
import { ToastProvider } from '@radix-ui/react-toast';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import ProgressBar from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import Gradient from './Graident/Gradient';
import SkipLink from './SkipLink/SkipLink';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  // const router = useRouter();

  // once router.events is supported by Next.js 13 we can use this
  // useMounted(() => {
  //   import('@frontend/services/googleAnalyticsService').then(
  //     ({ initGoogleAnalytics, logPageView }) => {
  //       initGoogleAnalytics(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  //       logPageView();
  //       router.events.on('routeChangeComplete', logPageView);
  //     },
  //   );
  // });

  // useEffect(() => {
  //   const handleRouteStart = () => NProgress.start();
  //   const handleRouteDone = () => NProgress.done();

  //   router.events.on('routeChangeStart', handleRouteStart);
  //   router.events.on('routeChangeComplete', handleRouteDone);
  //   router.events.on('routeChangeError', handleRouteDone);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteStart);
  //     router.events.off('routeChangeComplete', handleRouteDone);
  //     router.events.off('routeChangeError', handleRouteDone);
  //   };
  // }, [router.events]);

  return (
    <NavigationContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        <ToastProvider>
          <TooltipProvider>
            <SkipLink />
            <Gradient />
            <ProgressBar shallowRouting appDirectory />
            <>{children}</>
          </TooltipProvider>
        </ToastProvider>
      </ThemeProvider>
    </NavigationContextProvider>
  );
};
export default Providers;
