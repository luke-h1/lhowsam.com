import { GraphQLClient } from 'graphql-request';

export const cmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);
