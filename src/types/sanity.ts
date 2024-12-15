export interface Slug {
  _type?: 'slug';
  current: string;
}

export interface Reference {
  _type?: 'reference';
  _ref: string;
}

export interface Image {
  _type?: 'image';
  _key?: string;
  asset: Reference;
  alt?: string;
}

export interface Project {
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
  image: Image;
}

export interface Tag {
  _id?: string;
  _type?: 'tag';
  key?: string;
  title: string;
  slug: Slug;
}

export interface Post {
  _id: string;
  _type: 'post';
  _key?: string;
  _createdAt?: string;
  _rev?: string;
  _updatedAt?: string;
  title: string;
  intro: string;
  slug: Slug;
  content: string;
  publishedAt: string;
  image: Image;
  tags: Tag[];
}

export interface Talk {
  _rev: string;
  _createdAt: string;
  _id: string;
  _type: 'talk';
  _key?: string;
  _updatedAt: string;
  title: string;
  description: string;
  date: string;
  slideUrl: string;
  location: string;
  image?: Image;
}

export interface Work {
  _rev: string;
  _createdAt: string;
  _id: string;
  _type: 'work';
  _key?: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  intro: string;
  image: Image;
  content: string;
  companySite: string;
  siteUrl?: string;
  githubUrl?: string;
  publishedAt: string;
}
