import React from 'react';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { getAllFilesFrontmatter } from '@lib/mdx';
import { theme } from '@styles/Theme';

import BlogPost from '@components/BlogPost/BlogPost';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  min-width: 100vw;
  margin: 1rem 0 1rem 0;
  
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Intro = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 18px;
`;

const title = 'blog';
const description = 'Thoughts on React, Node, testing & tech in general';

const Index: NextPage = ({ posts }: any) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <NextSeo
          title="Blog | lhowsam.com"
          canonical="https://lhowsam.com/blog"
          openGraph={{
            url: 'https://lhowsam.com/blog',
            title: 'Blog | lhowsam.com',
          }}
        />
        <Wrapper>
          <>
            <Heading>{title}</Heading>
            <Intro>{description}</Intro>
            {!filterPosts.length && 'No blog posts found'}
            {filterPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
