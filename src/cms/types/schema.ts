import { Document } from './sanity';

export interface Blog extends Document<Blog> {
  _id: string;
  _type: 'blog';
  _key: string;
  title: string;
  intro: string;
  slug: Slug;
  description: string;
  publishedAt: string;
  image: Image;
  source: { compiledSource: string }; // when md is serialized
}

export interface Snippet extends Document<Snippet> {
  _id: string;
  _type: 'snippet';
  key: string;
  title: string;
  slug: Slug;
  description: string;
  image: Image;
  source: { compiledSource: string }; // when md is serialized

}
export interface Project extends Document<Project> {
  _id: string;
  _type: 'project';
  key: string;
  title: string;
  intro: string;
  description: string;
  image: Image;
  slug: Slug;
  tech: string[];
  siteUrl?: string;
  githubUrl: string;
  source: { compiledSource: string }; // when md is serialized
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
