import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const project = defineType({
  name: 'project',
  title: 'Project Posts',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      description: 'short intro of project post',
      rows: 3,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
      description: 'Content of project post',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'deployed site URL',
      type: 'string',
      description: 'Deployed project site URL',
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'string',
      description: 'Github URL of project',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      intro: 'intro',
    },
  },
});

export default project;
