import { createClient } from '@sanity/client';
import sanityImage from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-09-21',
  useCdn: process.env.NODE_ENV === 'production',
});

export const sanityFetcher = <TData, TQuery extends string>(
  query: TQuery,
): (() => Promise<TData>) => {
  return () => sanityClient.fetch(query);
};

export const imageBuilder = sanityImage(sanityClient);
