// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sentry from '@sentry/astro';
import { transformerNotationDiff } from '@shikijs/transformers';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://lhowsam.com',
  server: {
    port: 3000,
  },
  redirects: {
    '/work/': '/work-projects/',
    '/work/[slug]': '/work-projects/[slug]',
  },
  adapter: vercel({
    edgeMiddleware: true,
    skewProtection: true,
  }),
  integrations: [
    mdx(),
    sitemap(),
    react(),
    sentry(),
  ],
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'andromeeda',
      wrap: true,
      transformers: [transformerNotationDiff()],
    },
  },
  vite: {
    ssr: {
      external: ['sharp'],
    },
  },
});
