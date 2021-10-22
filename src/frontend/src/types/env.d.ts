declare namespace NodeJS {
  interface ProcessEnv {
    GA_TRACKING_ID: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SITE_URL: string;
  }
}