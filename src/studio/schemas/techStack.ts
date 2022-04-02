import { Document } from '../types/sanity';
import { TechStack } from '../types/schema';

const techStack: Document<TechStack> = {
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    },
  ],
};
export default techStack;
