import postService from '@src/services/postService';
import { GetServerSideProps } from 'next';
import RSS from 'rss';

export const getServerSideProps: GetServerSideProps = async ctx => {
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
  ctx.res.setHeader('Content-Type', 'text/xml');
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600',
  );
  ctx.res.write(feed.xml({ indent: true }));
  ctx.res.end();

  return {
    props: {},
  };
};
export default (): undefined => undefined;
