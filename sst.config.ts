/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: `lhowsam`,
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    // eslint-disable-next-line no-new
    new sst.aws.Nextjs(`Lhowsam`, {
      warm: 1,
      environment: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env
          .NEXT_PUBLIC_SANITY_PROJECT_ID as string,
        NEXT_PUBLIC_URL: 'https://staging.lhowsam.com',
        NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL: process.env
          .NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL as string,
      },
    });
  },
});
