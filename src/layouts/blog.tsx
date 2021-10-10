import React from 'react';
import {
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Avatar,
  Box,
} from '@chakra-ui/react';
import Container from '@src/components/Container';
import { IPost } from '@src/pages/blog/[slug]';

const BlogLayout = ({
  post,
  children,
}: {
  post: IPost;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box
        h={1}
        as="div"
        bgGradient="linear(to-r, blue.200, gray.500)"
        position="sticky"
        top={0}
        zIndex={100}
        w="1%"
        transition="width .5s ease-in-out"
      />
      <Container>
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} mt={4} as="h1" size="2xl">
              {post.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="sm"
                  name="Benjamin Carlson"
                  src="/images/luke.jpeg"
                  mr={2}
                />
                <Text fontSize="sm">
                  Posted by Luke Howsam /
                  {post.date}
                </Text>
              </Flex>
            </Flex>
            <Image src={post.image.url} alt={post.title} />
          </Flex>
          {children}
        </Stack>
      </Container>
    </>
  );
};
export default BlogLayout;
