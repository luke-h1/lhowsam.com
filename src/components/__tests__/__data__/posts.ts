import { Post, Tag } from '@frontend/types/sanity';

export const mockTags: Tag[] = [
  {
    _id: 'tag-1',
    title: 'Tag 1',
    slug: {
      current: 'tag-1',
      _type: 'slug',
    },
    _type: 'tag',
    key: 'tag-1',
  },
  {
    _id: 'tag-2',
    title: 'Tag 2',
    slug: {
      current: 'tag-2',
      _type: 'slug',
    },
    _type: 'tag',
    key: 'tag-2',
  },
];

export const mockPosts: Post[] = [
  {
    _id: 'post-1',
    title: 'Post 1',
    slug: {
      current: 'post-1',
      _type: 'slug',
    },
    _type: 'post',
    _key: 'post-1',
    content: 'Post 1 content',
    publishedAt: '2021-01-01T00:00:00.000Z',
    image: {
      _type: 'image',
      _key: 'image-1',
      asset: {
        _type: 'reference',
        _ref: 'image-1',
      },
      alt: 'Image 1',
    },
    intro: 'Post 1 intro',
    tags: mockTags,
  },
  {
    _id: 'post-2',
    title: 'Post 2',
    slug: {
      current: 'post-2',
      _type: 'slug',
    },
    _type: 'post',
    _key: 'post-2',
    content: 'Post 2 content',
    publishedAt: '2022-02-02T00:00:00.000Z',
    image: {
      _type: 'image',
      _key: 'image-2',
      asset: {
        _type: 'reference',
        _ref: 'image-2',
      },
      alt: 'Image 2',
    },
    intro: 'Post 2 intro',
    tags: mockTags,
  },
  {
    _id: 'post-3',
    title: 'Post 3',
    slug: {
      current: 'post-3',
      _type: 'slug',
    },
    _type: 'post',
    _key: 'post-3',
    content: 'Post 3 content',
    publishedAt: '2023-03-03T00:00:00.000Z',
    image: {
      _type: 'image',
      _key: 'image-3',
      asset: {
        _type: 'reference',
        _ref: 'image-3',
      },
      alt: 'Image 3',
    },
    intro: 'Post 3 intro',
    tags: mockTags,
  },
];
