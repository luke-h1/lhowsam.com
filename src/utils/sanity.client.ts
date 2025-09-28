import { ClientConfig, createClient } from '@sanity/client';

const config: Pick<ClientConfig, 'projectId' | 'dataset' | 'apiVersion'> = {
  projectId: 'wdj6ou2i',
  dataset: 'production',
  apiVersion: '2022-09-21',
};

const sanityPreviewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'drafts',
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
});

const studioClient = createClient({
  ...config,
  useCdn: process.env.NEXT_PUBLIC_URL !== 'http://localhost:3000',
});

export const getSanityClient = (isDraft = false) =>
  isDraft ? sanityPreviewClient : studioClient;
