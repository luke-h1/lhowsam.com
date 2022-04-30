import { Document } from './sanity';

export interface Post extends Document<Post> {
  _id: string;
  _type: 'post';
  _key: string;
  title: string;
  intro: string;
  slug: Slug;
  content: string;
  publishedAt: string;
  image: Image;
  tags: Tag[];
}

export interface Project extends Document<Project> {
  _id: string;
  _type: 'project';
  key: string;
  title: string;
  intro: string;
  content: string;
  order: number;
  slug: Slug;
  tags: Tag[];
  siteUrl?: string;
  githubUrl: string;
}
export interface Tag extends Document<Tag> {
  _id: string;
  _type: 'tag';
  key: string;
  title: string;
  slug: Slug;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Reference {
  _type: 'reference';
  _ref: string;
}

export interface Image {
  _type: 'image';
  _key: string;
  asset: Reference;
  alt?: string;
}
