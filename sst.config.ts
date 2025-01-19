/* eslint-disable */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'lhowsamdotcom',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('lhowsam', {
      warm: 4,
      server: {
        runtime: 'nodejs22.x',
        memory: '2048 MB',
      },
      imageOptimization: {
        memory: `2048 MB`,
      },
    });
  },
});
