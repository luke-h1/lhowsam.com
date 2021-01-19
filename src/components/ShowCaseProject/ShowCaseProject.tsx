import { ThemeProvider } from 'styled-components';
import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Wrapper, Title, TitleWrap } from './ShowCaseProjectElements';
import useProjects from '../../hooks/useProjects';

const ShowCaseProject = ({ theme }) => {
  const projects = useProjects();
  return (
    <ThemeProvider theme={theme}>
      <>
        <TitleWrap>
          <Title>Projects</Title>
        </TitleWrap>
        <Wrapper>
          {projects.map((project) => (
            <ProjectItem title={project.title} excerpt={project.excerpt} slug={project.slug} />
          ))}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
export default ShowCaseProject;
