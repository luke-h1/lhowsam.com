import { SlugField } from 'src/studio/types/sanity';
import isSlug from 'validator/lib/isSlug';

function slugField<Name extends string>({
  name,
  title,
  source,
}: {
  name: Name;
  title?: string;
  source: string;
}): SlugField<Name> {
  return {
    title,
    name,
    type: 'slug',
    options: {
      source,
    },
    validation: rule =>
      rule.required().custom(field => {
        return field?.current &&
          (field?.current === '/' || isSlug(field.current))
          ? true
          : 'Only alphanumeric characters, hyphens, and underscores are allowed';
      }),
  };
}
export default slugField;
