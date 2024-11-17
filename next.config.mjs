import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const contentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.googletagmanager.com *.vitals.vercel-insights.com static.cloudflareinsights.com eu-assets.i.posthog.com js-agent.newrelic.com;
 child-src *.youtube.com *.google.com *.twitter.com *.googletagmanager.com *.vitals.vercel-insights.com;
 style-src 'self' 'unsafe-inline' *.googleapis.com app-static.eu.posthog.com https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css;
 img-src * blob: data: https://*.googletagmanager.com;
 media-src 'none';
 connect-src * cloudflareinsights.com;
 font-src 'self' fonts.gstatic.com https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.woff2?;
 frame-src https://dev.lhowsam.com https://lhowsam.com;
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
    value: 'ALLOW-FROM https://dev.lhowsam.com https://lhowsam.com',
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
    serverComponentsExternalPackages: ['shiki'],

    // // monitoring
    // serverComponentsExternalPackages: ['newrelic'],
    // instrumentationHook:
    //   !!process.env.VERCEL_ENV &&
    //   process.env.VERCEL_ENV !== 'development' &&
    //   process.env.NEXT_PUBLIC_URL === 'lhowsam.com',
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
            value: 'public, max-age=3600, immutable', // 1 hour cache
          },
        ],
      },
    ];
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { dev, isServer, ...options }) => {
    if (process.env.ANALYZE) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
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
export default withVanillaExtract(nextConfig);
