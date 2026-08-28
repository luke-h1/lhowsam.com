export const MIN_INDEXABLE_TAG_POSTS = 3;

export function isIndexableTagPage(postCount: number) {
  return postCount >= MIN_INDEXABLE_TAG_POSTS;
}
