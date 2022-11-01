import { defineConfig } from 'sanity';
import { markdownSchema } from 'sanity-plugin-markdown';
import { deskTool } from 'sanity/desk';
import post from './src/schemas/post';
import project from './src/schemas/project';
import tag from './src/schemas/tag';

export default defineConfig({
  name: 'default',
  title: 'lhowsam.com',
  projectId: 'wdj6ou2i',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: [post, project, tag],
  },
});
