import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import BlogHeader from '@src/components/BlogHeader';
import { getAllItems, getItemBySlug } from '@src/utils/mdx';
import { Post } from '@src/types/post';
import { Markdown } from '@src/components/Markdown';
import { isProd } from '@src/utils/isProd';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (!post) {
      router.push('/404');
    }
  }, [post, router]);
  if (!post) {
    return null;
  }
  // const keywords = post.keywords?.split(', ') ?? [];
  return (
    <>
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
