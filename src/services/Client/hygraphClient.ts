import { GraphQLClient } from 'graphql-request';

const hygraphClient = new GraphQLClient(process.env.HYGRAPH_URL, {
  headers: {},
});

export default hygraphClient;
