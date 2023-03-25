import { Post } from '@frontend/types/sanity';
import groq from 'groq';
import { sanityClient } from './Client/sanity';

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

const postService = {
  async getSlugs(): Promise<Post[]> {
    return sanityClient.fetch(slugsQuery);
  },
  async getPost(slug: string): Promise<Post> {
    return sanityClient.fetch(getPostQuery, {
      slug,
    });
  },
  async getAllPosts(): Promise<Post[]> {
    return sanityClient.fetch(listAllPosts);
  },
  async getRecentPosts(): Promise<Post[]> {
    return sanityClient.fetch(recentPostsQuery);
  },
};

export default postService;
