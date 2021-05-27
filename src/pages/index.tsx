import { Box, Flex, Text } from '@chakra-ui/react';
import BlogCard from '@src/components/BlogCard';
import { CustomHead } from '@src/components/CustomHead';
import ProjectCard from '@src/components/ProjectCard';
import { BlogPost, ProjectPost } from '@src/types/md';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

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
      <Flex
        direction="column"
        alignItems="center"
        alignContent="center"
        w="700px"
        minH="20vh"
      >
        <Text as="h1" fontSize="37px" fontWeight="bold" mb="4">
          Hi, I'm Luke 👋
        </Text>
        <div>
          <Text
            as="p"
            fontSize="19px"
            textAlign="left"
            data-testid="i-intro-1"
            mb="3"
          >
            I have experience working in agile environments, testing features,
            various frontend languages, technologies & tooling.
          </Text>
          <Text as="p" fontSize="19px" textAlign="left" data-testid="i-intro-1">
            At the moment I enjoy working with React, GraphQL, SQL, Cypress &
            Styled Components
          </Text>
        </div>
      </Flex>
      <Box maxW="full">
        <Text as="h2" textAlign="left" fontSize="32px" fontWeight="medium">
          Blog
        </Text>
        {filterPosts.map((frontMatter) => (
          <BlogCard {...frontMatter} key={frontMatter.slug} />
        ))}
      </Box>
      <Box mt={4} maxW="full">
        <Text as="h2" textAlign="left" fontSize="32px" fontWeight="medium">
          Projects
        </Text>
        {projects.map((frontMatter) => (
          <ProjectCard {...frontMatter} key={frontMatter.slug} />
        ))}
      </Box>
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
