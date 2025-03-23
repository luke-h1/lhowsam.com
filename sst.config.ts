/* eslint-disable */
/// <reference path="./.sst/platform/config.d.ts" />

// https://github.com/taylorfsteele/TSS/blob/main/sst.config.ts

export default $config({
  app(input) {
    return {
      name: 'lhowsamdotcom',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        cloudflare: {
          apiToken: process.env.CF_API_TOKEN,
        },
        aws: {},
      },
    };
  },

  async run() {
    new sst.aws.Nextjs('lhowsam', {
      warm: 20,
      domain: {
        name: 'staging.lhowsam.com',
        dns: sst.cloudflare.dns({
          override: true,
          zone: process.env.CLOUDFLARE_ZONE_ID,
          proxy: true,
          transform: {
            record: {
              name: 'staging',
              allowOverwrite: true,
              comment: 'SST',
            },
          },
        }),
      },
      server: {
        runtime: 'nodejs22.x',
        architecture: 'arm64',
        memory: '3008 MB',
      },
      imageOptimization: {
        memory: '3008 MB',
        staticEtag: true,
      },
    });
  },
});
