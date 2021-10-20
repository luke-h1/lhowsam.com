import client from '@sanity/client';

const cmsClient = client({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wdj6ou2i',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2021-09-23',
  useCdn: process.env.NODE_ENV === 'production',
});

export default cmsClient;
