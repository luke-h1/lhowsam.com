import { Document } from '../types/sanity';
import { Project } from '../types/schema';

const project: Document<Project> = {
  name: 'project',
  title: 'Project Posts',
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
      description: 'short intro of project post',
      validation: rule => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Content of the project post',
      type: 'markdown',
      validation: rule => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image used for SEO',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    },
    {
      name: 'siteUrl',
      title: 'deployed site URL',
      type: 'string',
      description: 'Deployed project site URL',
    },
    {
      name: 'githubUrl',
      title: 'Github URL',
      type: 'string',
      description: 'Github URL of project',
      validation: rule => rule.required(),
    },
    {
      title: 'Tech stack',
      name: 'tech',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
export default project;
