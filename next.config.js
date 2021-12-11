module.exports = {
  images: {
    domains: ['localhost', 'media.graphcms.com'],
    formats: ['image/avif', 'image/webp']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  generateBuildId: async () => {
    return '1';
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
