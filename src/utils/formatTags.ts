/**
 * Returns a language-specific formatted string representing the elements of the list.
 *
 * @param {Array} arr The list to format
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
 *
 * @example
 *
 *     const tags = [one, two, three]
 *     formatTags(tags)
 *     // => one, two, and three
 */
export const formatTags = (arr: string[]): string =>
  new Intl.ListFormat('en', { type: 'conjunction' }).format(arr);
