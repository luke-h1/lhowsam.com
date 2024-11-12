import { ClientConfig, createClient } from '@sanity/client';

const config: Pick<ClientConfig, 'projectId' | 'dataset' | 'apiVersion'> = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-09-21',
};

const sanityPreviewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const studioClient = createClient({
  ...config,
  useCdn: process.env.NEXT_PUBLIC_URL !== 'http://localhost:3000',
});

export const getSanityClient = (isDraft = false) =>
  isDraft ? sanityPreviewClient : studioClient;
