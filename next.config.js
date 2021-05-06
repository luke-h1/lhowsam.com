/* eslint-disable */
module.exports = {
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    };
    return config;
  },
  future: {
    webpack5: true,
  },
};
