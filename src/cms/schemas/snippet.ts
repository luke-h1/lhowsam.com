import { Document } from '../types/sanity';
import { Snippet } from '../types/schema';

const snippet: Document<Snippet> = {
  name: 'snippet',
  title: 'Code snippet posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      validation: rule => rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image used for SEO',
      validation: rule => rule.required(),
    },
    
  ]
}
export default snippet;
