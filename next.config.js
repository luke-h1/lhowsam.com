const nrExternals = require('@newrelic/next/load-externals');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();
const contentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.googletagmanager.com *.vitals.vercel-insights.com static.cloudflareinsights.com eu-assets.i.posthog.com;
 child-src *.youtube.com *.google.com *.twitter.com *.googletagmanager.com *.vitals.vercel-insights.com;
 style-src 'self' 'unsafe-inline' *.googleapis.com app-static.eu.posthog.com;
 img-src * blob: data: https://*.googletagmanager.com;
 media-src 'none';
 connect-src * cloudflareinsights.com;
 font-src 'self' fonts.gstatic.com;
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
  {
    key: 'X-Frame-Options',
    value: 'ALLOW-FROM https://cms.lhowsam.com/',
  },
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
    webVitalsAttribution: ['CLS', 'LCP'],
    optimizePackageImports: ['framer-motion'],
    // Force SWC transform on build to stop Next.js trying to use babel
    // since babel is only needed to support vanilla-extract in unit tests
    forceSwcTransforms: true,

    // monitoring
    serverComponentsExternalPackages: ['newrelic'],
    instrumentationHook:
      !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'development',
  },
  images: {
    minimumCacheTTL: 120,
    unoptimized: false,
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
        source: '/blog/nextjs-ssr-notes',
        destination: '/blog/next-js-ssr-notes',
        permanent: true,
      },
      {
        source: '/cv',
        destination: '/static/cv.pdf',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/public/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/metrics',
        destination: '/api/metrics',
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
    nrExternals(config);

    return config;
  },
};
module.exports = withVanillaExtract(nextConfig);
