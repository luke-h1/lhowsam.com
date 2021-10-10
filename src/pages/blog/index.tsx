import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import BlogPost from '@src/components/BlogPost';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import { GetServerSideProps } from 'next';
import { motion } from 'framer-motion';
import { Post } from '../../types/post';

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Box mt={10}>
        {' '}
        <Heading mb={4}>Blog Posts</Heading>
        {posts && posts.map((post) => <BlogPost post={post} key={post.id} />)}
      </Box>
    </motion.div>
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
