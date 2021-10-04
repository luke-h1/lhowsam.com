export interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  slug?: any;
  image?: string;
  source?: string;
  draft: boolean;
  isOnIndex?: string;
}

export type Post = {
  meta: PostMeta;
  code?: any;
};
