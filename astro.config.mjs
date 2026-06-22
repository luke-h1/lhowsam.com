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
  // Astro 7 changed the default to 'jsx' (collapses whitespace between inline
  // elements like React). Keep the v6 HTML-rules behaviour to avoid layout
  // regressions; revisit if/when adopting JSX whitespace intentionally.
  compressHTML: true,
  server: {
    port: 3000,
  },
  redirects: {
    '/work/': '/work-projects/',
    '/work/[slug]': '/work-projects/[slug]',
    '/sitemap.xml': '/sitemap-index.xml',
    '/blog/deploying-a-full-stack-app-via-dokku': '/blog/full-stack-deploy-with-dokku',
    '/projects/infra': '/projects/config',
    '/blog/nextjs-ssr-notes': '/blog/next-js-ssr-notes',
    '/cv': '/static/cv.pdf',
    '/branches': 'https://branches.lhowsam.com',
    '/status': 'https://status.lhowsam.com',
    '/linkedin': 'https://www.linkedin.com/in/lukehowsam',
    '/github': 'https://github.com/luke-h1',
  },
  adapter: vercel({
    edgeMiddleware: false,
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
