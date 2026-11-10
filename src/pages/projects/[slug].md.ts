import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import {
  markdownResponse,
  toMarkdownDocument,
} from '../../util/contentMarkdown';

export const getStaticPaths = (async () => {
  const projects = await getCollection('projects');
  return projects.map(project => ({
    params: { slug: project.data.slug },
    props: { project },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { project } = props as { project: CollectionEntry<'projects'> };
  return markdownResponse(
    toMarkdownDocument({
      title: project.data.title,
      intro: project.data.intro,
      path: `/projects/${project.data.slug}/`,
      body: project.body ?? '',
    }),
  );
};
