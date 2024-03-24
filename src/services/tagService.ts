import { Tag } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import groq from 'groq';

const allTagsQuery = groq`
  *[_type == "tag"] {
  ...,
}
`;

const tagService = {
  async getTags(): Promise<Tag[]> {
    return getSanityClient().fetch(allTagsQuery);
  },
};
export default tagService;
