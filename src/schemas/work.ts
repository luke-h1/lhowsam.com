import { defineField, defineType } from 'sanity';
import altField from './fields/altField';

const work = defineType({
  name: 'work',
  title: 'Work Projects',
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
      type: 'text',
      description: 'short intro of project post',
      rows: 3,
      validation: rule => rule.required(),
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
      name: 'content',
      title: 'Content',
      type: 'markdown',
      description: 'Content of project post',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'companySite',
      title: 'Company site',
      type: 'string',
      description: 'Link to company',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
      description: 'Link to deployed site',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'string',
      description: 'Link to GitHub repo',
    }),
    defineField({
      name: 'publishedAt',
      title: 'publish date',
      type: 'date',
      validation: rule => rule.required(),
    }),
  ],
});
export default work;
