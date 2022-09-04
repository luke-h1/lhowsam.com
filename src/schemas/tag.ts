import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const tag = defineType({
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Tag title (i.e. Next.js, React etc.)',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'slug for tag',
      validation: rule => rule.required(),
      options: {
        source: 'title',
      },
    }),
  ],
});

export default tag;
