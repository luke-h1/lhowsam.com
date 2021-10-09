import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogHeader from '@src/components/BlogHeader';
import { getAllItems, getItemBySlug } from '@src/utils/mdx';
import { Post } from '@src/types/post';
import { Markdown } from '@src/components/Markdown';
import { isProd } from '@src/utils/isProd';
import { NextSeo } from 'next-seo';
import SEO from '@src/components/SEO';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  // const keywords = post.keywords?.split(', ') ?? [];
  return (
    <>
      <NextSeo
        title="Blog"
        canonical={`https://lhowsam.com/blog/${post.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${post.slug}`,
          title: `Blog | ${post.slug}`,
        }}
      />
      <SEO
        description={`${post.intro}`}
        title={`Blog | ${post.title}`}
        keywords={['blog', 'tech posts']}
        url={`https://lhowsam.com/blog/${post.slug}`}
      />
      <BlogHeader post={post} />
      <Markdown content={post.content} />
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllItems<Post>('posts', !isProd);
  return {
    fallback: false,
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const post = await getItemBySlug<Post>(slug, 'posts');
  return {
    props: {
      post: post ?? null,
    },
  };
};
export default PostPage;
