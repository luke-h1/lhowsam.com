import client from '@sanity/client';

const cmsClient = client({
  projectId: 'wdj6ou2i',
  dataset: 'production',
  apiVersion: '2021-09-23',
  useCdn: process.env.NODE_ENV === 'production',
});

export default cmsClient;
