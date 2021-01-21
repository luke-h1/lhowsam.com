import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title, Intro } from './ProjectPageStyles';

const ProjectPage = ({ theme }) => (
  <>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>Projects</Title>
        <Intro />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Wrapper>
    </ThemeProvider>
  </>
);
export default ProjectPage;
