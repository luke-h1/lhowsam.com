import { Project } from '@frontend/types/sanity';

export const project: Project = {
  _id: '1',
  _type: 'project',
  content: 'content',
  githubUrl: 'https://github.com/luke-h1/lhowsam.com',
  siteUrl: 'https://lhowsam.com',
  image: {
    _key: '1',
    _type: 'image',
    asset: {
      _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
      _type: 'reference',
    },
    alt: 'alt',
  },
  intro: 'project intro',
  key: '1',
  order: 1,
  slug: {
    _type: 'slug',
    current: 'lhowsam.com',
  },
  tags: [
    {
      _id: '1',
      _type: 'tag',
      key: 'tag',
      slug: {
        _type: 'slug',
        current: 'react-js',
      },
      title: 'React.js',
    },
  ],
  title: 'My website',
};
