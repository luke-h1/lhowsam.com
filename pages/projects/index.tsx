import React from 'react';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
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

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index: NextPage = ({ projects }: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextSeo
          title="Projects | lhowsam.com"
          canonical="https://lhowsam.com/projects"
          openGraph={{
            url: 'https://lhowsam.com/blog',
            title: 'Projects | lhowsam.com',
          }}
        />
        <Wrapper>
          <Title>Projects</Title>
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
