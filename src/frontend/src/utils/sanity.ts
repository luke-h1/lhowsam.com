import client from '@sanity/client';
import { isProd } from './isProd';

const cmsClient = client({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-04-02',
  useCdn: isProd,
});

export default cmsClient;
