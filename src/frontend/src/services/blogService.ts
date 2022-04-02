import groq from 'groq';
import { Blog } from 'lhowsam-studio/types/schema';
import cmsClient from '../utils/sanity';

const recentPostsQuery = groq`
*[ _type == "blog"][0...3] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  intro,
  image,
  "tags": tags[]->title,
  slug {
    current
  },
}
`;

const listAllPosts = groq`
  *[ _type == "blog"] | order(publishedAt desc) {
    title,
    _id,
    intro,
    publishedAt,
    image,
    "tags": tags[]->title,
    slug {
      current
    },
  }
`;

const getPostQuery = groq`
*[ _type == "blog" && slug.current == $slug][0] {
  ...,
  "tags": tags[]->title,
}
`;

const blogService = {
  async getPost(slug: string): Promise<Blog> {
    return cmsClient.fetch(getPostQuery, {
      slug,
    });
  },
  async getAllPosts(): Promise<
    Pick<Blog, 'title' | '_id' | 'content' | 'publishedAt' | 'slug'>[]
  > {
    return cmsClient.fetch(listAllPosts);
  },
  async getRecentPosts(): Promise<
    Pick<Blog, 'title' | 'publishedAt' | 'content' | 'slug'>[]
  > {
    return cmsClient.fetch(recentPostsQuery);
  },
};

export default blogService;
