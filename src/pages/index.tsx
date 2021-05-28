import { CustomHead } from '@src/components/CustomHead';
import Card from '@src/components/Card';
import Wrapper from '@src/components/Wrapper';
import { BlogPost, ProjectPost } from '@src/types/md';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
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
        >
          At the moment I enjoy working with React, GraphQL, SQL, Cypress &
          Styled Components
        </Text>
        <Box as="div">
          <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-3">
            Blog
          </h1>
          {filterPosts.map((frontMatter) => (
            <Card {...frontMatter} key={frontMatter.slug} />
          ))}
        </Box>

        <Box as="div">
          <Text fontSize="30px" fontWeight="bold">
            Projects
          </Text>
          {projects.map((frontMatter) => (
            <Card {...frontMatter} key={frontMatter.slug} />
          ))}
        </Box>
      </Wrapper>
      {' '}
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');

  return { props: { posts, projects } };
};
