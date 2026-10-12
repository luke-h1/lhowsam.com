import { describe, expect, test } from 'vitest';

import { formatLocalTime } from '../localTime';

describe('formatLocalTime', () => {
  test('formats UK time in summer with the BST offset', () => {
    expect(formatLocalTime(new Date('2026-07-01T12:34:00Z'))).toBe('13:34');
  });

  test('formats UK time in winter without an offset', () => {
    expect(formatLocalTime(new Date('2026-01-01T09:05:00Z'))).toBe('09:05');
  });
});
