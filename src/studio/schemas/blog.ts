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
      validation: rule => rule.required(),
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'string',
      description: 'used for SEO tags',
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
export default blog;
