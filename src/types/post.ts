export interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  slug?: any;
  category: 'draft' | 'project' | 'post';
  image?: string;
  source?: string;
  isOnIndex?: string;
}

export type Post = {
  meta: PostMeta;
  code?: any;
};
