'use client';

import Script from 'next/script';

const Analytics = () => {
  const isProd = process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com';

  if (!isProd) {
    return null;
  }

  // eslint-disable-next-line no-console
  console.log('GA initialized');

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
};

export default Analytics;
