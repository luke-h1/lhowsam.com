import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const lastmod = new Date().toISOString();

  const [posts, projects] = await Promise.all([
    postService.getSlugs(),
    projectService.getSlugs(),
  ]);

  const [postFields, projectFields] = await Promise.all([
    posts.map(post => ({
      loc: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
      lastmod,
    })),
    projects.map(project => ({
      loc: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug.current}`,
      lastmod,
    })),
  ]);

  const fields: ISitemapField[] = [...postFields, ...projectFields];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default (): undefined => undefined;
