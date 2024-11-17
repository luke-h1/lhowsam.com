import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import workService from '@frontend/services/workService';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Luke Howsam',
    site_url: process.env.NEXT_PUBLIC_URL,
    feed_url: `${process.env.NEXT_PUBLIC_URL}/feed.xml`,
  });

  const [posts, projects, works] = await Promise.all([
    postService.getAllPosts(),
    projectService.getAllProjects(),
    workService.getWorks(),
  ]);

  const publishedTags = posts.flatMap(post => post.tags);

  posts?.map(post => {
    return feed.item({
      title: post.title,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
      date: post.publishedAt,
      description: post.intro,
    });
  });

  projects?.map(project => {
    return feed.item({
      title: project.title,
      url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug.current}`,
      date: new Date(),
      description: project.intro,
    });
  });

  works?.map(work => {
    return feed.item({
      title: work.title,
      url: `${process.env.NEXT_PUBLIC_URL}/work/${work.slug.current}`,
      date: work.publishedAt,
      description: work.intro,
    });
  });

  publishedTags?.map(tag => {
    return feed.item({
      title: tag.title,
      date: new Date(),
      url: `${process.env.NEXT_PUBLIC_URL}/blog/tags/${tag.slug.current}`,
      description: '',
      categories: [tag.title],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  });
}
