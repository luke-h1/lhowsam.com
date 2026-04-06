import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildProjectMdxDocument,
  rewriteMarkdownImages,
  toTagList,
} from './convert-sanity-projects-to-mdx.mjs';

test('toTagList prefers slug.current values', () => {
  assert.deepEqual(toTagList([{ title: 'Next.js', slug: { current: 'next-js' } }]), [
    'next-js',
  ]);
});

test('rewriteMarkdownImages rewrites image urls to local asset paths', () => {
  const markdown =
    'Intro\\n\\n![diagram](https://cdn.sanity.io/images/demo/one.png?w=450)\\n';

  const assets = [
    {
      originalUrl: 'https://cdn.sanity.io/images/demo/one.png?w=450',
      relativePath: '../../assets/projects/example-inline-1.png',
    },
  ];

  assert.equal(
    rewriteMarkdownImages(markdown, assets),
    'Intro\\n\\n![diagram](../../assets/projects/example-inline-1.png)\\n',
  );
});

test('buildProjectMdxDocument creates frontmatter with project metadata', () => {
  const document = buildProjectMdxDocument({
    slug: 'storify',
    title: 'Storify',
    intro: 'Ecommerce project',
    tags: ['next-js', 'graphql'],
    heroImagePath: '../../assets/projects/storify-hero.png',
    githubUrl: 'https://github.com/example/storify',
    siteUrl: 'https://storify.example.com',
    order: 2,
    content: 'Hello world',
  });

  assert.match(document, /^---\ntitle: "Storify"/);
  assert.match(document, /\nslug: "storify"\n/);
  assert.match(document, /heroImage: "\.\.\/\.\.\/assets\/projects\/storify-hero\.png"/);
  assert.match(document, /githubUrl: "https:\/\/github\.com\/example\/storify"/);
  assert.match(document, /siteUrl: "https:\/\/storify\.example\.com"/);
  assert.match(document, /order: 2/);
  assert.match(document, /\n---\n\nHello world\n$/);
});
