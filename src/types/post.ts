// export interface PostMeta {
//   title: string;
//   createdAt: string;
//   updatedAt: string;
//   description: string;
//   slug?: any;
//   category: 'draft' | 'project' | 'post';
//   image?: string;
//   source?: string;
//   isOnIndex?: string;
// }

// export type Post = {
//   meta: PostMeta;
//   code?: any;
// };

export interface Post {
  title: string;
  createdAt: string;
  updatedAt: string | null;
  slug: string;
  content: string;
  intro: string;
  keywords: string;
  readingTime: number;
  draft: boolean;
  isOnIndex: boolean;
  frontmatter: {
    [key: string]: any;
  };
}
