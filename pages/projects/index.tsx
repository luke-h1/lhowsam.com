import React from "react";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import data from "../../data/projects/projects.json";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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

export default function Index() {
  return (
    <>
      <NextSeo
        title="Projects | lhowsam.com"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: "https://lhowsam.com/blog",
          title: "Projects | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Projects</Title>
          <Intro />
          <Flex>
            {data.map((p) => (
              <ProjectCard title={p.title} excerpt={p.excerpt} />
            ))}
          </Flex>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}
