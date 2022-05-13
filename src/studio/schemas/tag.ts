import { TagIcon } from '@sanity/icons';
import { Document } from '../types/sanity';
import { Tag as TagType } from '../types/schema';

const Tag: Document<TagType> = {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Tag title (i.e. Next.js, React etc.)',
      validation: rule => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'slug for tag',
      validation: rule => rule.required(),
      options: {
        source: 'title',
      },
    },
  ],
};
export default Tag;
