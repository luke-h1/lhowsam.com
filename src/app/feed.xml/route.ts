import postService from '@frontend/services/postService';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Luke Howsam',
    site_url: process.env.NEXT_PUBLIC_URL,
    feed_url: `${process.env.NEXT_PUBLIC_URL}/feed.xml`,
  });

  const posts = await postService.getAllPosts();

  posts?.map(post => {
    return feed.item({
      title: post.title,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
      date: post.publishedAt,
      description: post.intro,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'content-type': 'application/xml;charset=UTF-8',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  });
}
