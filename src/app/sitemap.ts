import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects] = await Promise.all([
    postService.getSlugs(),
    projectService.getSlugs(),
  ]);

  const [blogPages, projectPages] = await Promise.all([
    posts.map(post => ({
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
      lastModified: post.publishedAt,
    })),
    projects.map(project => ({
      url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug.current}`,
    })),
  ]);

  const routes = ['', '/blog', '/projects', '/about'].map(route => ({
    url: `${process.env.NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogPages, ...projectPages];
}
