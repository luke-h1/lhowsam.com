import { Slug, Work } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import { sanityFetch } from '@frontend/utils/sanity.live';
import groq from 'groq';

const slugsQuery = groq`
*[_type == "work"] {
  slug {
    current
  }
}
`;

const worksQuery = groq`
*[_type == "work"] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug {
    current
  },
  intro,
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
  companySite,
  siteUrl,
  githubUrl,
  publishedAt
}
`;

const workQuery = groq`
*[ _type == "work" && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug {
    current
  },
  intro,
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
  companySite,
  siteUrl,
  githubUrl,
  publishedAt,
  videos[] {
    _key,
    video {
      asset-> {
        playbackId
      }
    },
    playbackId,
    caption
  }
}
`;

const workService = {
  async getWorks(draft = false): Promise<Work[]> {
    if (draft) {
      return getSanityClient(draft).fetch(worksQuery);
    }
    return getSanityClient().fetch(worksQuery);
  },
  async getWork(slug: string, draft = false): Promise<Work> {
    if (draft) {
      return getSanityClient(draft).fetch(workQuery, { slug });
    }
    const result = await sanityFetch({
      query: workQuery,
      params: { slug },
    });
    return result.data;
  },
  async getSlugs(draft = false): Promise<Slug[]> {
    if (draft) {
      return getSanityClient(draft).fetch(slugsQuery);
    }
    return getSanityClient().fetch(slugsQuery);
  },
} as const;

export default workService;
