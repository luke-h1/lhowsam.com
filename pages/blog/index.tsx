import React, { useState } from "react";
import { NextSeo } from 'next-seo';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";
import { getAllFilesFrontmatter } from "../../lib/mdx";
import styled from "styled-components";
import BlogPost from "../../components/BlogPost/BlogPost";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  min-width: 100vw;
  margin: 1rem 0 1rem 0;
`;

const Search = styled.input`
  padding: 1.25rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Intro = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const url = "https://lhowsam.com/blog";
const title = "blog";
const description = "Thoughts on React, Node, testing & tech in general";

export default function Index({ posts }) {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <>
    <NextSeo
        title="Blog | lhowsam.com"
        canonical="https://lhowsam.com/blog"
        openGraph={{
          url: "https://lhowsam.com/blog",
          title: "Blog | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <>
            <Heading>{title}</Heading>
            <Intro>{description}</Intro>
            {filterPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter("blog");
  return { props: { posts } };
}
