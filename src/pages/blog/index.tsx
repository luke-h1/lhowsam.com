import { BlogPostPreview } from '@src/components/blog';
import blogService from '@src/services/blogService';
import { PreviewLayout, Center } from '@src/styles/layouts';
import { Title } from '@src/styles/typography';
import { Post } from '@src/types/post';
import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
  posts: Post[];
}

const Index = ({ posts }: Props) => {
  return (
    <>
      <NextSeo
        title="Blog"
        canonical="https://lhowsam.com/blog"
        description="Blog"
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Blog | lhowsam.com',
        }}
      />
      <Center>
        <Title size={5}>blog</Title>
      </Center>

      <PreviewLayout>
        {posts &&
          posts.map(post => <BlogPostPreview post={post} key={post.id} />)}
      </PreviewLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const { posts } = await blogService.getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 30 * 60,
  };
};

export default Index;
