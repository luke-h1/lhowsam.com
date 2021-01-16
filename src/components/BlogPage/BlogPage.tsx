import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Intro, Title } from './BlogElements';
import usePosts from '../../hooks/usePosts';
const BlogPage = ({ theme }) => {
  const posts = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <Title>Blog</Title>
          <Intro></Intro>
          {posts.map(post => (
            <BlogItem title={post.title} date={post.date} description={post.description} slug={post.slug}/>
          ))}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
export default BlogPage;
