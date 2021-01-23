import React from "react";
import Intro from "../components/Intro/Intro";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import data from "../data/projects/projects.json";
import { getAllFilesFrontmatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost/BlogPost";

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

export default function Home({ posts }) {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <>
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: "https://lhowsam.com",
          title: "Home | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <Intro theme={theme} />
        <Flex>
          <Title>Recent Projects</Title>
          {data.map((p) => (
            <ProjectCard title={p.title} excerpt={p.excerpt} id={p.id} />
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
  const posts = await getAllFilesFrontmatter("blog");
  return { props: { posts } };
}
