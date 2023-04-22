import { GraphQLClient } from 'graphql-request';

const cmsClient = new GraphQLClient(process.env.SANITY_GQL_URL, {
  headers: {},
});
export default cmsClient;
