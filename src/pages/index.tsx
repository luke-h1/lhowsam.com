import { CustomHead } from '@src/components/CustomHead';
import Card from '@src/components/Card';
import Wrapper from '@src/components/Wrapper';
import { BlogPost, ProjectPost } from '@src/types/md';
import { getAllFilesFrontMatter } from '@src/utils/mdx';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Box, Text } from '@chakra-ui/react';

const Home = ({
  posts,
  projects,
}: {
  posts: BlogPost[];
  projects: ProjectPost[];
}) => {
  // @ts-expect-error
  const filterPosts = posts.sort((a, b) => Number(new Date(b.date) - Number(new Date(a.date))));
  return (
    <>
      <CustomHead title="Home | lhowsam.com" description="Homepage" />
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <Wrapper>
        <Text fontSize="40px" fontWeight="bold" mb={4}>
          Hi, I'm Luke 👋
        </Text>
        <Text
          as="p"
          fontSize="18px"
          textAlign="left"
          data-testid="i-intro-1"
          maxW="70%"
          mb={2}
        >
          I have experience working in agile environments, testing features,
          various frontend languages, technologies & tooling.
        </Text>
        <Text
          as="p"
          fontSize="18px"
          textAlign="left"
          data-testid="i-intro-2"
          maxW="70%"
          mb={7}
        >
          At the moment my favorite technologies are: React, Typescript,
          GraphQL, Node, PostgreSQL & styled-components
        </Text>
        <Box as="div">
          <Text fontSize="30px" fontWeight="bold">
            Blog
          </Text>
          {filterPosts.map((frontMatter) => (
            <Card {...frontMatter} />
          ))}
        </Box>

        <Box as="div">
          <Text fontSize="30px" fontWeight="bold">
            Projects
          </Text>
          {projects.map((frontMatter) => (
            <Card {...frontMatter} />
          ))}
        </Box>
      </Wrapper>
      {' '}
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');
  const projects = await getAllFilesFrontMatter('project');

  return { props: { posts, projects } };
};
