import { Slug, Work } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import groq from 'groq';

const slugsQuery = groq`
*[_type == "work"] {
  slug {
    current
  }
}
`;

const worksQuery = groq`
*[_type == "work"] {
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
  async getWorks(): Promise<Work[]> {
    return getSanityClient().fetch(worksQuery);
  },
  async getWork(slug: string, draft = false): Promise<Work> {
    return getSanityClient(draft).fetch(workQuery, {
      slug,
    });
  },
  async getSlugs(): Promise<Slug[]> {
    return getSanityClient().fetch(slugsQuery);
  },
} as const;

export default workService;
