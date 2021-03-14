import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import Intro from '@components/Intro';
import { getAllFilesFrontmatter } from '@utils/mdx';
import ProjectCard from '@components/ProjectCard';
import BlogCard from '@components/BlogCard';
import {
  Text, Flex, Box, SimpleGrid, useColorMode,
} from '@chakra-ui/react';
import { Skills } from '@data/skills';
import { BlogPost, ProjectPost } from '@src/types';
import { Wrapper } from '@src/components/Wrapper';

const Home = ({ posts, projects }: { posts: BlogPost[], projects: ProjectPost[] }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  const { colorMode } = useColorMode();

  const SkillsCard = {
    light: '#000',
    dark: '#fff',
  };

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
        <Wrapper variant="small">
          <Text as="p" fontSize="18px" mt={1} mb={6} align="center">
            I'm always expanding my technical skills by learning new tech. The following is a list technology I'm interested in / what I'm actively working with!
          </Text>
        </Wrapper>
        <SimpleGrid columns={[2, null, 3]} spacing="40px" mb={4}>
          {Skills
            && Skills.map((s) => (
              <Box
                as="button"
                borderRadius="md"
                bg="tomato"
                color="white"
                px={2}
                maxW="300px"
                h={8}
                key={s.id}
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
