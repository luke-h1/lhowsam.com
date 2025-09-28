import { schemaTypes } from '@frontend/schemas';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { markdownSchema } from 'sanity-plugin-markdown';
import { muxInput } from 'sanity-plugin-mux-input';
import CustomMarkdownInput from './src/components/sanity/CustomMarkdownInput';
import defaultDocumentNode from './src/components/sanity/util/defaultDocumentNode';

export default defineConfig({
  name: 'default',
  title: 'lhowsam.com',
  projectId: 'wdj6ou2i',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      defaultDocumentNode,
    }),
    presentationTool({
      allowOrigins: [
        'http://localhost:3000',
        'https://lhowsam.com',
        'https://dev.lhowsam.com',
      ],
      title: 'lhowsam.com',
      resolve: {
        mainDocuments: [
          {
            route: '/blog/:slug',
            filter: `_type == "post"`,
          },
          {
            route: '/projects/:slug',
            filter: `_type == "project"`,
          },
          {
            route: '/work/:slug',
            filter: `_type == "work"`,
          },
        ],
        locations: {
          post: {
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: doc => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: `/blog/${doc?.slug}`,
                },
              ],
            }),
          },
          project: {
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: doc => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: `/projects/${doc?.slug}`,
                },
              ],
            }),
          },
          work: {
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: doc => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: `/work/${doc?.slug}`,
                },
              ],
            }),
          },
        },
      },
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_URL,
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    muxInput(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
