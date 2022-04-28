import { DocumentIcon } from '@sanity/icons';
import { Document } from '../types/sanity';
import { Project } from '../types/schema';

const project: Document<Project> = {
  name: 'project',
  title: 'Project Posts',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: rule => rule.required(),
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      description: 'short intro of project post',
      rows: 3,
      validation: rule => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'markdown',
      description: 'long content of project post',
      validation: rule => rule.required(),
    },
    {
      name: 'siteUrl',
      title: 'deployed site URL',
      type: 'string',
      description: 'Deployed project site URL',
      validation: rule => rule.uri({ scheme: ['https'] }),
    },
    {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'string',
      description: 'Github URL of project',
      validation: rule => rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      validation: rule => rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      intro: 'intro',
    },
  },
};
export default project;
