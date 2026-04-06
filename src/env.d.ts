/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BASE_URL: string;
  readonly PUBLIC_NOW_PLAYING_API_BASE_URL?: string;
  readonly PUBLIC_NOW_PLAYING_API_KEY?: string;
  readonly PUBLIC_DEPLOYED_BY?: string;
  readonly PUBLIC_DEPLOYED_AT?: string;
  readonly PUBLIC_GIT_SHA?: string;
  readonly PUBLIC_SENTRY_DSN?: string;
  readonly PUBLIC_SENTRY_ENVIRONMENT?: string;
  readonly PUBLIC_SENTRY_RELEASE?: string;
  readonly PUBLIC_STATSIG_CLIENT_KEY: string;
  readonly PUBLIC_STATSIG_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
