import { Post } from '@frontend/types/sanity';
import groq from 'groq';
import studioClient from '../utils/sanity.client';

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
    return studioClient.fetch(slugsQuery);
  },
  async getPost(slug: string): Promise<Post> {
    return studioClient.fetch(getPostQuery, {
      slug,
    });
  },
  async getAllPosts(): Promise<Post[]> {
    return studioClient.fetch(listAllPosts);
  },
  async getRecentPosts(): Promise<Post[]> {
    return studioClient.fetch(recentPostsQuery);
  },
};

export default postService;
