export interface Blog {
  _id: string;
  _type: 'blog';
  _key: string;
  title: string;
  slug: Slug;
  intro: string;
  content: string;
  publishedAt: string;
  image: Image;
  tags: Tag[];
  source: { compiledSource: string }; // when md is serialized
}

export interface Project {
  _id: string;
  _type: 'project';
  key: string;
  title: string;
  intro: string;
  content: string;
  slug: Slug;
  tech: string[];
  siteUrl?: string;
  githubUrl: string;
  source: { compiledSource: string }; // when md is serialized
}

export interface TechStack {
  _id: string;
  _type: 'techStack';
  key: string;
  title: string;
}

export interface Tag {
  _id: string;
  _type: 'tag';
  key: string;
  title: string;
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
