import { DocumentIcon } from '@sanity/icons';
import { Document } from '../types/sanity';
import { Post } from '../types/schema';
import altField from './fields/altField';
import slugField from './fields/slugField';

const post: Document<Post> = {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    },
    slugField({
      title: 'Slug',
      name: 'slug',
      source: 'title',
    }),
    {
      name: 'intro',
      title: 'Intro',
      description: 'short intro of the blog post',
      type: 'text',
      rows: 3,
      validation: rule => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      description: 'Content of blog post',
      type: 'markdown',
      validation: rule => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [altField()],
      validation: rule => rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'publish date',
      type: 'date',
      validation: rule => rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      validation: rule => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      intro: 'intro',
    },
  },
};
export default post;
