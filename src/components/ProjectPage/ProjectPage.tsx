import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title, Intro } from './ProjectPageElements';
import useProjects from '../../hooks/useProjects';

const ProjectPage = ({ theme }) => {
  const projects = useProjects();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Projects</Title>
          <Intro />
          {projects.map((project) => (
            <ProjectItem title={project.title} excerpt={project.excerpt} slug={project.slug} />
          ))}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
export default ProjectPage;
