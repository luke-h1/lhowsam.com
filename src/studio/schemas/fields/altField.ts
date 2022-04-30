import { TextField } from '../../types/sanity';

const altField = (): TextField => {
  return {
    title: 'Alt',
    name: 'alt',
    description: 'Alternative text for image',
    type: 'text',
    rows: 3,
    validation: rule => rule.required(),
  };
};
export default altField;
