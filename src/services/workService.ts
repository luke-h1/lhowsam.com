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
  ...,
}
`;

const workQuery = groq`
*[ _type == "work" && slug.current == $slug][0] {
  ...,
  slug {
    current
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
