declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      NEXT_PUBLIC_GA_TRACKING_ID: string;
      SANITY_URL: string;
      NEW_RELIC_LICENSE_KEY: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    }
  }
}

export {};
