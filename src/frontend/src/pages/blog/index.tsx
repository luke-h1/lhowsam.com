import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
import Card from '@src/components/Card';
import { BlogPost } from '@src/types/md';
import { CustomHead } from '@src/components/CustomHead';
import Wrapper from '@src/components/Wrapper';

const Index = ({ posts }: { posts: BlogPost[] }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  return (
    <>
      <CustomHead title="Blog | lhowsam.com" description="Blog" />
      <NextSeo
        title="Blog"
        canonical="https://lhowsam.com/blog"
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Blog',
        }}
      />
      <Text fontSize="30px" fontWeight="bold">
        Blog
      </Text>
      <Wrapper>
        <Box as="div">
          {filterPosts.length
            && filterPosts.map((frontMatter) => (
              <Card key={frontMatter.title} {...frontMatter} />
            ))}
        </Box>
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
