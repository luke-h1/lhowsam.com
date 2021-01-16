import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Intro, Title } from './BlogElements';

const BlogPage = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
            <Title>Blog</Title>
          <Intro>
          </Intro>
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
export default BlogPage;
