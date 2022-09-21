import client from '@sanity/client';

const studioClient = client({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-09-21',
  useCdn: process.env.NODE_ENV === 'production',
});

export default studioClient;
