import React from 'react';
import { ThemeProvider } from 'styled-components';
import BlogItem from '../BlogItem/BlogItem';
import { Wrapper, Intro, Title } from './BlogElements';
import usePosts from '../../hooks/usePosts';

const BlogPage = ({ theme }) => {
  const posts = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <Title>Blog</Title>
          <Intro />
          {posts.map((post) => (
            <BlogItem title={post.title} date={post.date} description={post.description} slug={post.slug} excerpt={post.excerpt} theme={theme} />
          ))}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
export default BlogPage;
