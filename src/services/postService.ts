import { Post, Slug } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import { sanityFetch } from '@frontend/utils/sanity.live';
import groq from 'groq';

const slugsQuery = groq`
*[_type == "post"] {
  slug {
    current
  }
}
`;

const recentPostsQuery = groq`
*[_type == "post"] | order(publishedAt desc)[0...3] {
  title,
  intro,
  publishedAt,
  slug {
    current
  },
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

const listAllPosts = groq`
*[_type == "post"] | order(publishedAt desc) {
  title,
  intro,
  publishedAt,
  slug {
    current
  },
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
  async getSlugs(): Promise<Slug[]> {
    return getSanityClient().fetch(slugsQuery);
  },
  async getPost(slug: string, draft = false): Promise<Post> {
    if (draft) {
      return getSanityClient(draft).fetch(getPostQuery, { slug });
    }
    const result = await sanityFetch({ query: getPostQuery, params: { slug } });
    return result.data;
  },
  async getAllPosts(): Promise<Post[]> {
    return getSanityClient().fetch(listAllPosts);
  },
  async getRecentPosts(draft = false): Promise<Post[]> {
    if (draft) {
      return getSanityClient(draft).fetch(recentPostsQuery);
    }
    return getSanityClient().fetch(recentPostsQuery);
  },
};

export default postService;
