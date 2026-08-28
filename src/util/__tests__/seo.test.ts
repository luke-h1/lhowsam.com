import { describe, expect, test } from 'vitest';

import {
  SEO_TITLE_MAX,
  absoluteUrl,
  toJsonLd,
  toJsonLdScripts,
  withBrand,
} from '../seo';

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

describe('toJsonLdScripts', () => {
  test('serializes array values as separate JSON-LD script payloads', () => {
    expect(
      toJsonLdScripts([
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
        },
      ]),
    ).toEqual([
      '{"@context":"https://schema.org","@type":"WebSite"}',
      '{"@context":"https://schema.org","@type":"Person"}',
    ]);
  });
});

describe('withBrand', () => {
  test('appends each suffix while the title stays within the SERP budget', () => {
    expect(withBrand('Short title', 'Projects', 'Luke Howsam')).toBe(
      'Short title | Projects | Luke Howsam',
    );
  });

  test('drops the suffixes that would push the title past the limit', () => {
    const long =
      'DDOS attacks and how to prevent them with Cloudflare + AWS API gateway';

    expect(withBrand(long, 'Luke Howsam')).toBe(long);
  });

  test('keeps an earlier suffix that fits when a later one does not', () => {
    const title = 'A forty-four character title used for testing';

    expect(withBrand(title, 'Talks', 'Luke Howsam')).toBe(`${title} | Talks`);
  });

  test('never returns a title longer than the limit unless the title itself is', () => {
    expect(withBrand('Tiny', 'Luke Howsam').length).toBeLessThanOrEqual(
      SEO_TITLE_MAX,
    );
  });
});
