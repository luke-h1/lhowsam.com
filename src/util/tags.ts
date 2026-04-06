export const toTagSlug = (tag: string) =>
  tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const fromTagSlug = (slug: string, tags: string[]) =>
  tags.find(tag => toTagSlug(tag) === slug);
