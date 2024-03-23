declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      SHOULD_CALL_SPOTIFY: string;
    }
  }
}

export {};
