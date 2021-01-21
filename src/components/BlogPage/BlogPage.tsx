import styled, { ThemeProvider } from 'styled-components';
import React from 'react';

import BlogItem from '../BlogItem/BlogItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  min-width: 100vw;
`;

const Intro = styled.p``;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;

const BlogPage = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <>
      <Wrapper>
        <Title>Blog</Title>
        <Intro />
      </Wrapper>
    </>
  </ThemeProvider>
);
export default BlogPage;
