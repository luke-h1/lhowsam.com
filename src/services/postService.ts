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
  _id,
  _type,
  title,
  intro,
  publishedAt,
  slug {
    current
  },
  image {
    alt,
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "tags": coalesce(tags[]-> {
    _id,
    title,
    slug {
      current
    }
  }, [])
}
`;

const listAllPosts = groq`
*[_type == "post"] | order(publishedAt desc) {
  _id,
  _type,
  title,
  intro,
  publishedAt,
  slug {
    current
  },
  image {
    alt,
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "tags": coalesce(tags[]-> {
    _id,
    title,
    slug {
      current
    }
  }, [])
}
`;

export const getPostQuery = groq`
*[ _type == "post" && slug.current == $slug][0] {
  _id,
  _type,
  title,
  intro,  
  publishedAt,
  content,
  image {
    alt,
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "tags": coalesce(tags[]-> {
    _id,
    title,
    slug {
      current
    }
  }, [])
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
