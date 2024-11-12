import { defineType, defineField } from 'sanity';
import altField from './fields/altField';

const post = defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
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
      description: 'short intro of the blog post',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'Content of blog post',
      type: 'markdown',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [altField()],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'publish date',
      type: 'date',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      intro: 'intro',
    },
  },
});
export default post;
