import React from "react";
import { ThemeProvider } from "styled-components";
import { Wrapper, Title, Intro } from './ProjectPageStyles';

const ProjectPage = ({ theme }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Projects</Title>
          <Intro />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
export default ProjectPage;
