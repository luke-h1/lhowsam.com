import { Talk } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import groq from 'groq';

const talksQuery = groq`
*[_type == "talk"] {
    ...,
  }
`;

const talkService = {
  async getTalks(): Promise<Talk[]> {
    return getSanityClient().fetch(talksQuery);
  },
};

export default talkService;
