import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import {
  markdownResponse,
  toMarkdownDocument,
} from '../../util/contentMarkdown';

export const getStaticPaths = (async () => {
  const workProjects = await getCollection(
    'workProjects',
    ({ data }: CollectionEntry<'workProjects'>) =>
      import.meta.env.PROD ? !data.draft : true,
  );
  return workProjects.map((workProject: CollectionEntry<'workProjects'>) => ({
    params: { slug: workProject.data.slug },
    props: { workProject },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { workProject } = props as {
    workProject: CollectionEntry<'workProjects'>;
  };
  return markdownResponse(
    toMarkdownDocument({
      title: workProject.data.title,
      intro: workProject.data.intro,
      path: `/work-projects/${workProject.data.slug}/`,
      body: workProject.body ?? '',
    }),
  );
};
