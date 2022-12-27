import { Tag } from '@frontend/types/sanity';
import studioClient from '@frontend/utils/sanity';
import groq from 'groq';

const allTagsQuery = groq`
  *[_type == "tag"] {
  ...,
}
`;

const tagService = {
  async getTags(): Promise<Tag[]> {
    return studioClient.fetch(allTagsQuery);
  },
};
export default tagService;
