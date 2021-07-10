export interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  slug?: any;
  category: 'draft' | 'project' | 'blog';
  image?: string;
  source?: string;
}

export type Post = {
  meta: PostMeta;
  code?: any;
};
