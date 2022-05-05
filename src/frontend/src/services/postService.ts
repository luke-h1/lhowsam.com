import groq from 'groq';
import { Post } from 'studio/types/schema';
import cmsClient from '../utils/sanity';

const slugsQuery = groq`
*[_type == "post"] {
  slug {
    current
  },
}
`;

const recentPostsQuery = groq`
*[ _type == "post"][0...3] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  intro,
  image {
    alt,
    asset {
      _ref
    },
  },
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
    image {
      alt,
      asset {
      _ref
     },
    },
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
  image {
    alt,
    asset {
      _ref
    },
  },
  tags[]-> {
    title,
    slug
  },
}
`;

const getPostByTagQuery = groq`
*[_type == "post" && $keyword in tags[]->slug.current] {
  ...,
  image {
    alt,
    asset {
      _ref
    },
  },
  tags[]-> {
  title,
    slug
  },
}
`;

const postService = {
  async getSlugs(): Promise<Post[]> {
    return cmsClient.fetch(slugsQuery);
  },
  async getPost(slug: string): Promise<Post> {
    return cmsClient.fetch(getPostQuery, {
      slug,
    });
  },
  async getAllPosts(): Promise<
    Pick<Post, 'title' | '_id' | 'content' | 'publishedAt' | 'slug' | 'image'>[]
  > {
    return cmsClient.fetch(listAllPosts);
  },
  async getRecentPosts(): Promise<
    Pick<Post, 'title' | 'publishedAt' | 'content' | 'slug'>[]
  > {
    return cmsClient.fetch(recentPostsQuery);
  },
  async getPostsByTag(tag: string): Promise<Post[]> {
    return cmsClient.fetch(getPostByTagQuery, {
      keyword: tag,
    });
  },
};

export default postService;
