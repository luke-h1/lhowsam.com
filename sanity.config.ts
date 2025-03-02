import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
// import { deskTool } from 'sanity/desk';
import { structureTool } from 'sanity/structure';
import { markdownSchema } from 'sanity-plugin-markdown';
import CustomMarkdownInput from './src/components/sanity/CustomMarkdownInput';
import defaultDocumentNode from './src/components/sanity/util/defaultDocumentNode';
import { schemaTypes } from './src/schemas';

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
    visionTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
