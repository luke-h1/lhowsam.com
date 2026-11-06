export const toTagSlug = (tag: string) =>
  tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const fromTagSlug = (slug: string, tags: string[]) =>
  tags.find(tag => toTagSlug(tag) === slug);

const SEO_DESCRIPTION_MAX = 160;

export function tagPageDescription(
  label: string,
  postTitles: string[],
  authorName: string,
) {
  const count = `${postTitles.length} post${postTitles.length === 1 ? '' : 's'}`;
  const base = `${count} about ${label} by ${authorName}`;
  const format = (titles: string[]) =>
    titles.length === 0
      ? `${base}.`
      : `${base}, including ${titles.map(t => `"${t}"`).join(', ')}.`;

  const included = postTitles.reduce<string[]>((titles, postTitle) => {
    const next = [...titles, postTitle];
    return format(next).length <= SEO_DESCRIPTION_MAX ? next : titles;
  }, []);

  return format(included);
}
