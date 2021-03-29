/* eslint-disable global-require */
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { isServer }) => {
    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }
    if (isServer) {
      require('./src/utils/generate-sitemap');
    }

    return config;
  },
  future: {
    webpack5: true,
  },
};
