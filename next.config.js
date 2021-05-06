/* eslint-disable */
module.exports = {
  trailingSlash: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    if (isServer) {
      require('./src/utils/generate-sitemap');
    }
    return config;
  },
  future: {
    webpack5: true,
  },
};
