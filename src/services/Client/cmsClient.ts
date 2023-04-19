import { GraphQLClient } from 'graphql-request';

const cmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_SANITY_GQL_URL, {
  headers: {},
});
export default cmsClient;
