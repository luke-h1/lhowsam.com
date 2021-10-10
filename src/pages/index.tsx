import React from 'react';
import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next';
import SEO from '@src/components/SEO';
import Hero from '@src/components/Hero';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import BlogPost from '@src/components/BlogPost';
import { Heading } from '@chakra-ui/react';
import { Post } from '../types/post';

const Index = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <SEO
        description="Home page"
        title="Home"
        keywords={['Projects, Blog posts, About']}
        url="https://lhowsam.com"
      />
      <Hero />
      <Heading mb={4}>Recent Blog Posts</Heading>
      {posts && posts.map((post) => <BlogPost post={post} key={post.id} />)}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = gql`
    query Blogs {
      blogs(orderBy: id_DESC, first: 3) {
        id
        slug
        title
        intro
        date
      }
    }
  `;
  const data = await Client.request(query);
  console.log(data);
  return {
    props: { posts: data.blogs },
  };
};

export default Index;
