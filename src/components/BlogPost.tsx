import React from 'react';
import {
  Heading, Text, Flex, Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Post } from '@src/types/post';

interface Props {
  post: Post;
}

const BlogPost = ({ post }: Props) => {
  return (
    <Link href={`blog/${post.slug}`} key={post.id}>
      <a>
        <Box mb={10} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Flex
              flexDirection="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
              <Heading size="md" as="h3" mb={3} fontWeight="medium">
                {post.title}
              </Heading>
              {' '}
              <Text mb={2} mt={2}>
                {post.date}
              </Text>
            </Flex>
          </Flex>
          <Text>{post.intro}</Text>
        </Box>
      </a>
    </Link>
  );
};
export default BlogPost;
