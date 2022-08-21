import { Post } from '@src/types/sanity';
import groq from 'groq';
import studioClient from '../utils/sanity';

const slugsQuery = groq`
*[_type == "post"] {
  slug {
    current
  },
}
`;

const recentPostsQuery = groq`
*[ _type == "post"][0...3] | order(publishedAt desc) {
  ...,
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

const getTagSlugsQuery = groq`
*[_type == "post"] {
  ...,
  tags[]-> {
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
  async getPostsByTag(tag: string): Promise<Post[]> {
    return studioClient.fetch(getPostByTagQuery, {
      keyword: tag,
    });
  },
  async getTagSlugs(): Promise<Post[]> {
    return studioClient.fetch(getTagSlugsQuery);
  },
};

export default postService;
