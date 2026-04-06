import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  environment:
    import.meta.env.PUBLIC_BASE_URL === 'lhowsam.com'
      ? 'production'
      : 'development',
  enabled: true,
  integrations: [],
  tunnel: '/api/tunnel',
});
