import { BlogPostPreview } from '@src/components/blog';
import blogService from '@src/services/blogService';
import { PreviewLayout, Center } from '@src/styles/layouts';
import { Title } from '@src/styles/typography';
import { Post } from '@src/types/post';
import React from 'react';

interface Props {
  posts: Post[];
}

const Index = ({ posts }: Props) => {
  return (
    <>
      <Center>
        <Title size={5}>blog</Title>
      </Center>

      <PreviewLayout>
        {posts &&
          posts.map((post) => <BlogPostPreview post={post} key={post.id} />)}
      </PreviewLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const { posts } = await blogService.getAllPosts();

  return {
    revalidate: 60 * 30,
    props: {
      posts: posts,
    },
  };
};

export default Index;
