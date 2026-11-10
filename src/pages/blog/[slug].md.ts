import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import {
  markdownResponse,
  toMarkdownDocument,
} from '../../util/contentMarkdown';

export const getStaticPaths = (async () => {
  const posts = await getCollection(
    'blog',
    ({ data }: CollectionEntry<'blog'>) =>
      import.meta.env.PROD ? !data.draft : true,
  );
  return posts.map((post: CollectionEntry<'blog'>) => ({
    params: { slug: post.data.slug },
    props: { post },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { post } = props as { post: CollectionEntry<'blog'> };
  return markdownResponse(
    toMarkdownDocument({
      title: post.data.title,
      intro: post.data.intro,
      path: `/blog/${post.data.slug}/`,
      body: post.body ?? '',
    }),
  );
};
