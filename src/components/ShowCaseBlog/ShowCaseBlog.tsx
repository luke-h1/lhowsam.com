import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { BlogWrapper } from './ShowCaseBlogElements';
import { ThemeProvider } from 'styled-components';

const ShowCaseBlog = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
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
