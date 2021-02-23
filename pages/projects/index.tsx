import React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import { getAllFilesFrontmatter } from '@lib/mdx';
import ProjectCard from '@components/ProjectCard';
import { Container, Flex, Text } from '@chakra-ui/react';

const Index: NextPage = ({ projects }: any) => {
  return (
    <>
      <Container>
        <NextSeo
          title="Projects | lhowsam.com"
          canonical="https://lhowsam.com/projects"
          openGraph={{
            url: 'https://lhowsam.com/blog',
            title: 'Projects | lhowsam.com',
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
            Projects
          </Text>
          <Flex
            direction="column"
            justify="center"
            align="center"
            mb="8"
            maxW="700px"
          >
            {projects.map((frontMatter) => (
              <ProjectCard key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('project');
  return { props: { projects } };
}
export default Index;
