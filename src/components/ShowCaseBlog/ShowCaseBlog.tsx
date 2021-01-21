import React from 'react';
import { ThemeProvider } from 'styled-components';
import BlogItem from '../BlogItem/BlogItem';
import { BlogWrapper, Title, TitleWrap } from './ShowCaseBlogStyles';


const ShowCaseBlog = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <TitleWrap>
          <Title>Blog</Title>
        </TitleWrap>
        <BlogWrapper>
        </BlogWrapper>
      </>
    </ThemeProvider>
  );
};
export default ShowCaseBlog;
