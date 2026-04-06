import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildExperienceMdxDocument,
  extractVideos,
  injectInlineVideos,
  rewriteMarkdownImages,
} from './convert-sanity-experience-to-mdx.mjs';

test('rewriteMarkdownImages rewrites image urls to local asset paths', () => {
  const markdown =
    'Intro\\n\\n![diagram](https://cdn.sanity.io/images/demo/one.png?w=450)\\n';

  const assets = [
    {
      originalUrl: 'https://cdn.sanity.io/images/demo/one.png?w=450',
      relativePath: '../../assets/work-projects/example-inline-1.png',
    },
  ];

  assert.equal(
    rewriteMarkdownImages(markdown, assets),
    'Intro\\n\\n![diagram](../../assets/work-projects/example-inline-1.png)\\n',
  );
});

test('extractVideos keeps playback ids and captions', () => {
  const result = extractVideos([
    {
      caption: 'Demo clip',
      video: {
        asset: {
          playbackId: 'abc123',
        },
      },
    },
  ]);

  assert.deepEqual(result, [{ playbackId: 'abc123', caption: 'Demo clip' }]);
});

test('extractVideos handles null values', () => {
  assert.deepEqual(extractVideos(null), []);
});

test('injectInlineVideos inserts the sporting life video at the original content marker', () => {
  const content =
    "And so when we scrolled the sports data out of view, it reused that same component (which didn't cause an unmount) just with different data:";

  const result = injectInlineVideos(content, [
    { playbackId: 'abc123', caption: '' },
  ]);

  assert.match(result, /<MuxVideo playbackId="abc123" caption="Video demonstration of the scrolling behavior" \/>/);
});

test('buildExperienceMdxDocument creates frontmatter with experience metadata', () => {
  const document = buildExperienceMdxDocument({
    slug: 'sporting-life-mobile',
    title: 'Sporting Life Mobile',
    intro: 'React Native migration',
    publishedAt: '2025-09-27',
    heroImagePath: '../../assets/work-projects/sporting-life-mobile-hero.webp',
    companySite: 'https://www.sportinglife.com',
    siteUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/repo',
    content: 'Hello world',
  });

  assert.match(document, /^---\ntitle: "Sporting Life Mobile"/);
  assert.match(document, /\nslug: "sporting-life-mobile"\n/);
  assert.match(document, /publishedAt: 2025-09-27/);
  assert.match(
    document,
    /heroImage: "\.\.\/\.\.\/assets\/work-projects\/sporting-life-mobile-hero\.webp"/,
  );
  assert.match(document, /companySite: "https:\/\/www\.sportinglife\.com"/);
  assert.match(document, /\n---\n\nHello world\n$/);
});
