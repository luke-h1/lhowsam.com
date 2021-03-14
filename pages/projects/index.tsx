import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@utils/mdx';
import { Container, Flex, Text } from '@chakra-ui/react';
import ProjectCard from '@src/components/ProjectCard';
import { ProjectPost } from '@src/types';

const Index = ({ projects }: { projects: ProjectPost[] }) => {
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
            {projects.map((project) => (
              <ProjectCard title={project.title} summary={project.summary} slug={project.slug} tags={project.tags} github={project.github} site={project.site} />
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
