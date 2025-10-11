// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://324e8d0a6b4e45fba0c32dc792fb0c9c@o536134.ingest.us.sentry.io/5654675',

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.5, // 50%
  // Enable logs to be sent to Sentry
  enableLogs: true,
  environment:
    process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com'
      ? 'production'
      : 'development',

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  enabled:
    process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com' ||
    process.env.NEXT_PUBLIC_URL === 'https://dev.lhowsam.com',
});
