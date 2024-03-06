import { Post } from '@frontend/types/sanity';
import groq from 'groq';
import { getSanityClient } from '../utils/sanity.client';

const slugsQuery = groq`
*[_type == "post"] {
  slug {
    current
  },
}
`;

const recentPostsQuery = groq`
*[ _type == "post"] | order(publishedAt desc) [0..2] {
  _createdAt,
  _id,
    image {
      ...,
    },
  title,
  intro,  
  publishedAt,
  image {
    alt,
    asset {
      _ref
    },
  },
  tags[] -> {
    title,
    slug {
      ...,
      
    }
  },
  slug {
    current
  },
}
`;

const listAllPosts = groq`
  *[ _type == "post"] | order(publishedAt desc) {
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
    slug {
      current
    },
  }
`;

export const getPostQuery = groq`
*[ _type == "post" && slug.current == $slug][0] {
  title,
  intro,  
  publishedAt,
  content,
  image {
    alt,
    asset {
    ...,
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
    return getSanityClient().fetch(slugsQuery);
  },
  async getPost(slug: string, draft: boolean): Promise<Post> {
    return getSanityClient(draft).fetch(getPostQuery, {
      slug,
    });
  },
  async getAllPosts(): Promise<Post[]> {
    return getSanityClient().fetch(listAllPosts);
  },
  async getRecentPosts(): Promise<Post[]> {
    return getSanityClient().fetch(recentPostsQuery);
  },
};

export default postService;
