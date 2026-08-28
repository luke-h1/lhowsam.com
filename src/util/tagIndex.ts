/**
 * A tag page earns a place in the index only once it aggregates something.
 * Below this it is a near-duplicate of the single post it lists: the same
 * title and intro, no additional content, and it competes with that post.
 */
export const MIN_INDEXABLE_TAG_POSTS = 3;

export function isIndexableTagPage(postCount: number) {
  return postCount >= MIN_INDEXABLE_TAG_POSTS;
}
