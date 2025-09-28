import { createClient } from '@sanity/client';
import { defineLive } from 'next-sanity/live';

export const client = createClient({
  projectId: 'wdj6ou2i',
  dataset: 'production',
  apiVersion: '2022-09-21',
  useCdn: false,
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
});

const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_TOKEN,
  browserToken: process.env.NEXT_PUBLIC_SANITY_VIEW_TOKEN,
  fetchOptions: {
    revalidate: 1800,
  },
});

export { sanityFetch, SanityLive };
