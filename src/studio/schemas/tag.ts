import { Document } from '../sanity';
import { Tag as TagType } from '../types/schema';

const Tag: Document<TagType> = {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Tag description (i.e. next.js, React etc.)',
      validation: rule => rule.required(),
    },
  ],
};
export default Tag;
