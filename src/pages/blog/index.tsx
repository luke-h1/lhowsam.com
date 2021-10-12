import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import BlogPost from '@src/components/BlogPost';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import { GetServerSideProps } from 'next';
import SEO from '@src/components/SEO';
import { NextSeo } from 'next-seo';
import { Post } from '../../types/post';

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        canonical="https://lhowsam.com/blog"
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Blog',
        }}
      />
      <SEO
        description="blog page"
        title="Blog"
        keywords={['Typescript, React.js, Next.js, blog, Tech']}
        url="https://lhowsam.com/blog"
      />

      <Box mt={10}>
        {' '}
        <Heading mb={4}>Blog Posts</Heading>
        {posts && posts.map((post) => <BlogPost post={post} key={post.id} />)}
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = gql`
    query Blogs {
      blogs(orderBy: id_DESC) {
        id
        slug
        title
        intro
        date
      }
    }
  `;
  const data = await Client.request(query);
  return {
    props: { posts: data.blogs },
  };
};

export default BlogPage;
