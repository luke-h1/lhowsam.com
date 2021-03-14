import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import { getAllFilesFrontmatter } from '@utils/mdx';
import { Container, Flex, Text } from '@chakra-ui/react';
import BlogCard from '@components/BlogCard';
import { BlogPost, ProjectPost } from '@src/types';

const Index: NextPage = ({ posts }: { posts: BlogPost[]}) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return (
    <>
      <Container>
        <NextSeo
          title="Blog | lhowsam.com"
          canonical="https://lhowsam.com/blog"
          openGraph={{
            url: 'https://lhowsam.com/blog',
            title: 'Blog | lhowsam.com',
          }}
        />
        <Flex
          direction="column"
          justify="center"
          align="center"
          mb="8"
          maxW="700px"
        >
          <Text as="h1" fontSize="40px" mb={4}>
            Blog
          </Text>
          <Text align="center" as="h1" fontSize="25px" mb={4}>
            Thoughts on React, Node, testing & tech in general
          </Text>
          <Flex
            direction="column"
            justify="center"
            align="center"
            mb="8"
            maxW="700px"
          >
            {!filterPosts.length && 'No blog posts found'}
            {filterPosts.map((frontMatter) => (
              <BlogCard key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
