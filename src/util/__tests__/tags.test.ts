import { describe, expect, test } from 'vitest';
import { fromTagSlug, toTagSlug } from '../tags';

describe('toTagSlug', () => {
  test('normalizes tags into URL slugs', () => {
    expect(toTagSlug('React Native')).toBe('react-native');
    expect(toTagSlug('Next.js')).toBe('next-js');
  });
});

describe('fromTagSlug', () => {
  test('returns the original tag text for a slug', () => {
    expect(fromTagSlug('react-native', ['TypeScript', 'React Native'])).toBe(
      'React Native',
    );
  });
});
