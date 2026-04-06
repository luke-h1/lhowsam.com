import { describe, expect, test } from 'vitest';

import { absoluteUrl, toJsonLd } from '../seo';

describe('absoluteUrl', () => {
  test('returns the site root for an empty path', () => {
    expect(absoluteUrl('')).toBe('https://lhowsam.com/');
  });

  test('joins relative paths onto the site origin', () => {
    expect(absoluteUrl('/blog')).toBe('https://lhowsam.com/blog');
  });

  test('preserves fully qualified urls', () => {
    expect(absoluteUrl('https://cdn.example.com/image.png')).toBe(
      'https://cdn.example.com/image.png',
    );
  });
});

describe('toJsonLd', () => {
  test('serializes structured data safely for inline output', () => {
    expect(
      toJsonLd({
        '@context': 'https://schema.org',
        name: 'Luke <script>alert("xss")</script> Howsam',
      }),
    ).toBe(
      '{"@context":"https://schema.org","name":"Luke \\u003cscript>alert(\\"xss\\")\\u003c/script> Howsam"}',
    );
  });
});
