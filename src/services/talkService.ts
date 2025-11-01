import { Talk, Slug } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import groq from 'groq';

const talksQuery = groq`
*[_type == "talk"] | order(date desc) {
    ...,
  }
`;

const talkQuery = groq`
*[_type == "talk" && slug.current == $slug][0] {
    ...,
  }
`;

const slugsQuery = groq`
*[_type == "talk"] {
    slug
  }
`;

const talkService = {
  async getTalks(): Promise<Talk[]> {
    return getSanityClient().fetch(talksQuery);
  },

  async getTalk(slug: string, preview: boolean = false): Promise<Talk> {
    return getSanityClient(preview).fetch<Talk>(talkQuery, {
      slug,
    });
  },

  async getSlugs(): Promise<Slug[]> {
    const talks = await getSanityClient().fetch<{ slug: Slug }[]>(slugsQuery);
    return talks.map(talk => talk.slug);
  },
};

export default talkService;
