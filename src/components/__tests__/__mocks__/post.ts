import { Post } from '@frontend/types/sanity';

export const post: Post = {
  _id: '1',
  _key: '',
  _type: 'post',
  content: 'mock content',
  image: {
    _key: '',
    _type: 'image',
    asset: {
      _ref: '',
      _type: 'reference',
    },
    alt: 'alt',
  },
  intro: 'post intro',
  publishedAt: '2022-05-12',
  slug: {
    _type: 'slug',
    current: 'post-slug',
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
  title: 'post-title',
};
