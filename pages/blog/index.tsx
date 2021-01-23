import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

import styled from "styled-components";

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

export default function Index() {
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
}
