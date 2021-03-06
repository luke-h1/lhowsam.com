import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps, NextPage } from 'next';
import Intro from '@components/Intro';
import { getAllFilesFrontmatter } from '@utils/mdx';
import ProjectCard from '@components/ProjectCard';
import BlogCard from '@components/BlogCard';
import { Text, Flex, Box, SimpleGrid } from '@chakra-ui/react';
import { Skills } from 'data/skills';
import Project from '../types/Project';
import Blog from '../types/Blog';

interface Iprops {
  posts: Blog;
  projects: Project;
}

const Home: NextPage<Iprops> = ({ posts, projects }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <>
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home | lhowsam.com',
        }}
      />
      <Intro />
      <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
        Projects
      </Text>
      <Flex direction="column" justify="center" align="center" mb={6}>
        {projects.map((frontMatter) => (
          <ProjectCard key={frontMatter.title} {...frontMatter} />
        ))}
      </Flex>
      <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
        Blog Posts
      </Text>
      <Flex direction="column" justify="center" align="center" mb={6}>
        {filterPosts.map((frontMatter) => (
          <BlogCard key={frontMatter.title} {...frontMatter} />
        ))}
      </Flex>
      <Flex direction="column" justify="center" align="center" mb={6}>
        <Text as="h2" fontSize="40px" mt={1} mb={6} align="center">
          Skills
        </Text>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {Skills &&
            Skills.map((s) => (
              <Box
                as="button"
                borderRadius="md"
                bg="tomato"
                color="white"
                px={2}
                h={8}
              >
                {s.name}
              </Box>
            ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
};
export default Home;
