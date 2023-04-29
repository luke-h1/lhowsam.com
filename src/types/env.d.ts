declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HYGRAPH_URL: string;
      NEXT_PUBLIC_URL: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      NEXT_PUBLIC_GA_TRACKING_ID: string;
      HYGRAPH_URL: string;
      CMS_PROD_TOKEN: string;
    }
  }
}

export {};
