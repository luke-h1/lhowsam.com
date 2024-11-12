import { defineField } from 'sanity';

const altField = () => {
  return defineField({
    title: 'Alt',
    name: 'alt',
    description: 'Alternative text for image',
    type: 'text',
    rows: 3,
    validation: rule => rule.required(),
  });
};
export default altField;
