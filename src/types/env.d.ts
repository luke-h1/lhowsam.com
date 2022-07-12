declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      SENDGRID_API_KEY: string;
    }
  }
}

export {};
