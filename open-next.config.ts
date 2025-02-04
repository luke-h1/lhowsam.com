import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js';

const config = {
  default: {
    override: {
      wrapper: 'aws-lambda-streaming',
      tagCache: 'dynamodb-lite',
      incrementalCache: 's3-lite',
      queue: 'sqs-lite',
    },
    minify: true,
    placement: 'global',
  },
} satisfies OpenNextConfig;

export default config;

export type Config = typeof config;
