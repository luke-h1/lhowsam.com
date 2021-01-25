import React, { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import styled, { ThemeProvider } from 'styled-components';
import Intro from '../components/Intro/Intro';
import { theme } from '../styles/Theme';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { getAllFilesFrontmatter } from '../lib/mdx';
import BlogPost from '../components/BlogPost/BlogPost';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  text-align: center;
  margin: 1rem 0 1rem 0;
`;

export default function Home({ posts, projects }) {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
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
      <ThemeProvider theme={theme}>
        <Intro theme={theme} />
        <Flex>
          <Title>Recent Projects</Title>
          {projects.map((frontMatter) => (
            <ProjectCard key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
        <Container>
          <Title>Recent Blog Posts</Title>
          {filterPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Container>
      </ThemeProvider>
    </>
  );
}
export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
}
