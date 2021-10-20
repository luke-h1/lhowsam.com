import { Blog } from '@lhowsam/cms/types/schema';
import { BlogPostPreview } from '@src/components/blog';
import blogService from '@src/services/blogService';
import { PreviewLayout, Center } from '@src/styles/layouts';
import { Title } from '@src/styles/typography';
import React from 'react';

interface Props {
  posts: Blog[];
}

const Index = ({ posts }: Props) => {
  return (
    <>
      <Center>
        <Title size={5}>blog</Title>
      </Center>

      <PreviewLayout>
        {posts &&
          posts.map((post) => <BlogPostPreview post={post} key={post._id} />)}
      </PreviewLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await blogService.getAllPosts();

  if (!posts.length) {
    return {
      props: [],
      notFound: true,
    };
  }

  return {
    revalidate: 60 * 30,
    props: {
      posts,
    },
  };
};

export default Index;
