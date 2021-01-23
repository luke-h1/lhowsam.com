import React from "react";
import { ThemeProvider } from "styled-components";
import { Wrapper, Intro, Title } from "./BlogPageStyles";

const BlogPage = ({ theme }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Blog root page</Title>
          <Intro />
          {/* map thru blog posts here */}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default BlogPage;