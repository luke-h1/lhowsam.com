import { GraphQLClient } from 'graphql-request';

export const Client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);
