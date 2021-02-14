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
  text-align: center;  
`;

const Heading = styled.h1`
  margin-bottom: 5rem;
`;

const Intro = styled.p`
  font-size: 20px;
  margin-bottom: 2rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;  
`;

const title: string = 'blog';
const description: string = 'Thoughts on React, Node, testing & tech in general';

const Index: NextPage = ({ posts }: any) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <NextSeo
          title="Blog | lhowsam.com"
          canonical="https://lhowsam.com/blog"
          openGraph={{
            url: 'https://lhowsam.com/blog',
            title: 'Blog | lhowsam.com',
          }}
        />
        <Heading>{title}</Heading>
        <Intro>{description}</Intro>
        <Flex>
          {!filterPosts.length && 'No blog posts found'}
          {filterPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </ThemeProvider>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
