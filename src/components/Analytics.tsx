'use client';

import useLocalStorage from '@frontend/hooks/useLocalStorage';
import Script from 'next/script';

const Analytics = () => {
  const [gaDisabled] = useLocalStorage('ga_filter_tests', false);
  return process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com' &&
    !gaDisabled ? (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
`}
      </Script>
    </>
  ) : undefined;
};
export default Analytics;
