import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { BlogWrapper, Title, TitleWrap } from './ShowCaseBlogElements';
import { ThemeProvider } from 'styled-components';
import usePosts from '../../hooks/usePosts';

const ShowCaseBlog = ({ theme }) => {
  const recentPosts = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <>
        <TitleWrap>
          <Title>Blog</Title>
        </TitleWrap>
        <BlogWrapper>
          {recentPosts.map(post => (
            <BlogItem title={post.title} date={post.date} excerpt={post.excerpt} slug={post.slug} theme={theme} />
          ))}
        </BlogWrapper>
      </>
    </ThemeProvider>
  );
};
export default ShowCaseBlog;
