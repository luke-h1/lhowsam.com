import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { BlogWrapper, Title, TitleWrap } from './ShowCaseBlogElements';
import { ThemeProvider } from 'styled-components';

const ShowCaseBlog = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <TitleWrap>
          <Title>Blog</Title>
        </TitleWrap>
        <BlogWrapper>
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </BlogWrapper>
      </>
    </ThemeProvider>
  );
};
export default ShowCaseBlog;
