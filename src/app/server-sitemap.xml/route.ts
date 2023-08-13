import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export async function GET() {
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

  return getServerSideSitemap(fields);
}
