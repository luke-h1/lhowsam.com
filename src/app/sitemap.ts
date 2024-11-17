import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import workService from '@frontend/services/workService';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects, works] = await Promise.all([
    postService.getAllPosts(),
    projectService.getAllProjects(),
    workService.getWorks(),
  ]);

  const tags = posts.flatMap(post => post.tags);

  const [blogPages, projectPages, workPages, tagPages] = await Promise.all([
    posts.map(post => ({
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
      lastModified: post.publishedAt,
    })),
    projects.map(project => ({
      url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug.current}`,
    })),
    works.map(work => ({
      url: `${process.env.NEXT_PUBLIC_URL}/work/${work.slug.current}`,
    })),
    tags.map(tag => ({
      url: `${process.env.NEXT_PUBLIC_URL}/blog/tags/${tag.slug.current}`,
    })),
  ]);

  const routes = ['', '/blog', '/projects', '/about', '/talks'].map(route => ({
    url: `${process.env.NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogPages, ...projectPages, ...workPages, ...tagPages];
}
