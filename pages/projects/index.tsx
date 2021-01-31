import React from 'react';
import { NextSeo } from 'next-seo';
import styled, { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';
import { theme } from '@styles/Theme';
import { getAllFilesFrontmatter } from '@lib/mdx';
import ProjectCard from '@components/ProjectCard/ProjectCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  min-width: 100vw;
`;

const Title = styled.h1`
  margin-bottom: 5rem;
`;

const Intro = styled.p``;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index: NextPage = ({ projects }: any) => {
  return (
    <>
      <NextSeo
        title="Projects | lhowsam.com"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Projects | lhowsam.com',
        }}
      />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Projects</Title>
          <Intro />
          <Flex>
            {projects.map((frontMatter) => (
              <ProjectCard key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('project');
  return { props: { projects } };
}
export default Index;
