import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title, Intro } from './ProjectPageElements';
import { ThemeProvider } from 'styled-components';

const ProjectPage = ({ theme }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Projects</Title>
          <Intro></Intro>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
export default ProjectPage;
