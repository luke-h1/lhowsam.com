declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_URL: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      NEXT_PUBLIC_GA_TRACKING_ID: string;
      NEW_RELIC_LICENSE_KEY: string;
      NEW_RELIC_APPLICATION_ID: string;
    }
  }
}

export {};
