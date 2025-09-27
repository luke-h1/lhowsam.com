/* eslint-disable @typescript-eslint/no-require-imports */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

const contentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.googletagmanager.com *.vitals.vercel-insights.com static.cloudflareinsights.com js-agent.newrelic.com *.sanity.io *.sanity-cdn.com;
 child-src *.youtube.com *.google.com *.twitter.com *.googletagmanager.com *.vitals.vercel-insights.com *.sanity.io *.sanity-cdn.com;
 style-src 'self' 'unsafe-inline' *.googleapis.com https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css;
 img-src * blob: data: https://*.googletagmanager.com *.sanity.io *.sanity-cdn.com;
 media-src 'self' blob: data: *.mux.com *.sanity.io *.sanity-cdn.com;
 connect-src * cloudflareinsights.com *.sanity.io *.sanity-cdn.com;
 font-src 'self' fonts.gstatic.com https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.woff2;
 frame-src https://dev.lhowsam.com https://lhowsam.com http://localhost:3000 *.sanity.io *.sanity-cdn.com;
 frame-ancestors 'self' *.sanity.io *.sanity-cdn.com http://localhost:3000;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      // swc
      '@swc/core',
      '@swc/helpers',
      '@swc-node/register',
      '@swc/register',
      '@swc/webpack',
    ],
    webVitalsAttribution: ['CLS', 'LCP'],
    // Force SWC transform on build to stop Next.js trying to use babel
    // since babel is only needed to support vanilla-extract in unit tests
    forceSwcTransforms: true,
    serverComponentsHmrCache: true,
  },
  // excludeDefaultMomentLocales: true,
  // outputFileTracingExcludes: {
  //   '*': ['node_modules/@swc*/**', '!node_modules/@swc/helpers/**'],
  // },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'localhost' },
      { hostname: 'i.scdn.co' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/blog/deploying-a-full-stack-app-via-dokku',
        destination: '/blog/full-stack-deploy-with-dokku',
        permanent: true,
      },
      {
        source: '/projects/infra',
        destination: '/projects/config',
        permanent: true,
      },
      {
        source: '/blog/nextjs-ssr-notes',
        destination: '/blog/next-js-ssr-notes',
        permanent: true,
      },
      {
        source: '/cv',
        destination: '/static/cv.pdf',
        permanent: true,
      },
      {
        source: '/branches',
        destination: 'https://branches.lhowsam.com',
        permanent: true,
      },
      {
        source: '/status',
        destination: 'https://status.lhowsam.com',
        permanent: true,
      },
      /**
       * Socials
       */
      {
        source: '/twitter',
        destination: 'https://x.com/luke_h1__',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/lukehowsam',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/luke-h1',
        permanent: true,
      },
      {
        source: '/bsky',
        destination: 'https://bsky.app/profile/luke-h1.bsky.social',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/studio/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' *.sanity.io *.sanity-cdn.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.sanity.io *.sanity-cdn.com; style-src 'self' 'unsafe-inline' *.sanity.io *.sanity-cdn.com *.googleapis.com maxcdn.bootstrapcdn.com; img-src * blob: data:; media-src 'self' blob: data: *.mux.com *.sanity.io *.sanity-cdn.com; font-src 'self' fonts.gstatic.com https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.woff2; connect-src * *.sanity.io *.sanity-cdn.com; frame-src 'self' http://localhost:3000 https://dev.lhowsam.com https://lhowsam.com; frame-ancestors 'none';",
          },
        ],
      },
      {
        source: '/((?!studio).*)',
        headers: securityHeaders,
      },
      {
        source: '/public/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable', // 1 hour cache
          },
        ],
      },
    ];
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { dev, isServer, ...options }) => {
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: options.isServer
            ? '../analyze/server.html'
            : '../analyze/client.html',
        }),
      );
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
module.exports = withVanillaExtract(nextConfig);
