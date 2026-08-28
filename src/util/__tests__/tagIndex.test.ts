import { describe, expect, test } from 'vitest';

import { MIN_INDEXABLE_TAG_POSTS, isIndexableTagPage } from '../tagIndex';

describe('isIndexableTagPage', () => {
  test('rejects a tag page below the threshold', () => {
    expect(isIndexableTagPage(MIN_INDEXABLE_TAG_POSTS - 1)).toBe(false);
    expect(isIndexableTagPage(0)).toBe(false);
  });

  test('accepts a tag page at or above the threshold', () => {
    expect(isIndexableTagPage(MIN_INDEXABLE_TAG_POSTS)).toBe(true);
    expect(isIndexableTagPage(MIN_INDEXABLE_TAG_POSTS + 10)).toBe(true);
  });
});
