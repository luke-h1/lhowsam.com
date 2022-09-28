import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const lastmod = new Date();

  const [posts, projects] = await Promise.all([
    postService.getSlugs(),
    projectService.getSlugs(),
  ]);

  const postFields = posts.map(post => ({
    loc: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
    lastmod: lastmod.toISOString(),
  }));

  const projectFields = projects.map(project => ({
    loc: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug.current}`,
    lastmod: lastmod.toISOString(),
  }));

  const fields: ISitemapField[] = [...postFields, ...projectFields];

  return getServerSideSitemap(ctx, fields);
};

export default (): undefined => undefined;
