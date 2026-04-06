import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildMdxDocument,
  rewriteMarkdownImages,
  toTagList,
} from './convert-sanity-blog-to-mdx.mjs';

test('toTagList prefers slug.current values', () => {
  assert.deepEqual(toTagList([{ title: 'Cloudflare', slug: { current: 'cloudflare' } }]), [
    'cloudflare',
  ]);
});

test('rewriteMarkdownImages rewrites image urls to local asset paths', () => {
  const markdown =
    'Intro\\n\\n![diagram](https://cdn.sanity.io/images/demo/one.png?w=450)\\n';

  const assets = [
    {
      originalUrl: 'https://cdn.sanity.io/images/demo/one.png?w=450',
      relativePath: '../../assets/blog/example-inline-1.png',
    },
  ];

  assert.equal(
    rewriteMarkdownImages(markdown, assets),
    'Intro\\n\\n![diagram](../../assets/blog/example-inline-1.png)\\n',
  );
});

test('buildMdxDocument creates frontmatter with local hero image and markdown body', () => {
  const document = buildMdxDocument({
    slug: 'example-post',
    title: 'Example Post',
    intro: 'Example intro',
    publishedAt: '2025-05-04',
    tags: ['cloudflare', 'aws'],
    heroImagePath: '../../assets/blog/example-post-hero.png',
    content: 'Hello world',
  });

  assert.match(document, /^---\ntitle: "Example Post"/);
  assert.match(document, /\nslug: "example-post"\n/);
  assert.match(document, /heroImage: "\.\.\/\.\.\/assets\/blog\/example-post-hero\.png"/);
  assert.match(document, /tags: \["cloudflare","aws"\]/);
  assert.match(document, /\n---\n\nHello world\n$/);
});
