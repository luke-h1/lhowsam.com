import groq from 'groq';
import { Post } from 'studio/types/schema';
import cmsClient from '../utils/sanity';

const recentPostsQuery = groq`
*[ _type == "post"][0...3] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  intro,
  image,
  tags[] -> {
    title,
    slug
  },
  slug {
    current
  },
}
`;

const listAllPosts = groq`
  *[ _type == "post"] | order(publishedAt desc) {
    title,
    _id,
    intro,
    publishedAt,
    image,
    tags[]-> {
      title,
      slug
   },
    slug {
      current
    },
  }
`;

const getPostQuery = groq`
*[ _type == "post" && slug.current == $slug][0] {
  ...,
  tags[]-> {
    title,
    slug
  },
}
`;

const getPostByTagsQuery = groq`
*[_type == "post" && $keyword in tags[]->slug.current] {
  ...,
  tags[]-> {
  title,
    slug
  },
}
`;

const postService = {
  async getPost(slug: string): Promise<Post> {
    return cmsClient.fetch(getPostQuery, {
      slug,
    });
  },
  async getAllPosts(): Promise<
    Pick<Post, 'title' | '_id' | 'content' | 'publishedAt' | 'slug'>[]
  > {
    return cmsClient.fetch(listAllPosts);
  },
  async getRecentPosts(): Promise<
    Pick<Post, 'title' | 'publishedAt' | 'content' | 'slug'>[]
  > {
    return cmsClient.fetch(recentPostsQuery);
  },
  async getPostsByTags(tag: string): Promise<Post[]> {
    return cmsClient.fetch(getPostByTagsQuery, {
      keyword: tag,
    });
  },
};

export default postService;
