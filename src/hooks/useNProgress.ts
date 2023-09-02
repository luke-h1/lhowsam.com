import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

const useNProgress = () => {
  const router = useRouter();
  // https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
};
export default useNProgress;
