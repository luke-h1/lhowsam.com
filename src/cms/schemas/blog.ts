import { Document } from '../types/sanity';
import { Blog } from '../types/schema';

const blog: Document<Blog> = {
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
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
      name: 'intro',
      title: 'Intro',
      type: 'text',
      description: 'short intro of blog post',
      validation: rule => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
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
      validation: rule => rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'publish date',
      type: 'date',
      validation: rule => rule.required(),
    },
  ],
};
export default blog;
