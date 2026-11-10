import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import {
  markdownResponse,
  toMarkdownDocument,
} from '../../util/contentMarkdown';

export const getStaticPaths = (async () => {
  const talks = await getCollection(
    'talks',
    ({ data }: CollectionEntry<'talks'>) =>
      import.meta.env.PROD ? !data.draft : true,
  );
  return talks.map((talk: CollectionEntry<'talks'>) => ({
    params: { slug: talk.data.slug },
    props: { talk },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { talk } = props as { talk: CollectionEntry<'talks'> };
  return markdownResponse(
    toMarkdownDocument({
      title: talk.data.title,
      intro: talk.data.intro,
      path: `/talks/${talk.data.slug}/`,
      body: talk.body ?? '',
    }),
  );
};
