const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    return '1';
  },
  images: {
    domains: ['localhost', 'cdn.sanity.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/blog/deploying-a-full-stack-app-via-dokku',
        destination: '/blog/full-stack-deploy-with-dokku',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
