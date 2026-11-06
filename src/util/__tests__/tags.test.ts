import { describe, expect, test } from 'vitest';
import { fromTagSlug, tagPageDescription, toTagSlug } from '../tags';

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

describe('tagPageDescription', () => {
  test('lists post titles in the description', () => {
    expect(
      tagPageDescription('git', ['Forcing git merges', 'Renaming'], 'Luke'),
    ).toBe(
      '2 posts about git by Luke, including "Forcing git merges", "Renaming".',
    );
  });

  test('uses the singular for one post', () => {
    expect(tagPageDescription('ssr', ['SSR notes'], 'Luke')).toBe(
      '1 post about ssr by Luke, including "SSR notes".',
    );
  });

  test('skips titles that push the description past 160 characters', () => {
    const description = tagPageDescription(
      'aws',
      ['A'.repeat(150), 'Short title'],
      'Luke',
    );

    expect(description).toBe(
      '2 posts about aws by Luke, including "Short title".',
    );
  });
});
