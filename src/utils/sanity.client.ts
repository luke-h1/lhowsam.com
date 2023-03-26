import { ClientConfig, createClient } from '@sanity/client';

export const clientOptions: Pick<
  ClientConfig,
  'projectId' | 'dataset' | 'apiVersion'
> = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-09-21',
};

const studioClient = createClient({
  ...clientOptions,
  useCdn: process.env.NODE_ENV === 'production',
});

export default studioClient;
