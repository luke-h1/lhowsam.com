import { defineType, defineField } from 'sanity';
import { altField } from './fields';

const talk = defineType({
  name: 'talk',
  title: 'Talks',
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
        maxLength: 96,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
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
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
    }),
    defineField({
      name: 'slideUrl',
      title: 'Slides',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (optional)',
      type: 'string',
    }),
  ],
});
export default talk;
