export interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  intro?: string;
  slug?: any;
  category: 'draft' | 'project' | 'post';
  image?: string;
  source?: string;
  draft: boolean;
  isOnIndex?: string;
}

export type Post = {
  meta: PostMeta;
  code?: any;
};
