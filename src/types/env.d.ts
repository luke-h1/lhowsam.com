declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_GA_TRACKING_ID: string;
      SANITY_DRAFT_SECRET: string;
      NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL: string;
    }
  }
}

export {};
