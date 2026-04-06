import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: import.meta.env.SENTRY_DSN,
  environment:
    import.meta.env.PUBLIC_BASE_URL === 'lhowsam.com'
      ? 'production'
      : 'development',
  enabled: true,
});
