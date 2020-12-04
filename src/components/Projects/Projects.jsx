/* eslint-disable */
import React from 'react';
import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';
import ProjectPreview from '../ProjectPreview/ProjectPreview';
import useProjects from '../../hooks/useProjects';

const Projects = () => {
  const projects = useProjects();
  return (
  <>
    <ProjectWrapper>
      <ProjectTitle>My Projects</ProjectTitle>
      <CardContainer>
        <CardWrap>
          {projects.map((project) => (
           <ProjectPreview key={project.slug} project={project} /> 
          ))}
        </CardWrap>
      </CardContainer>
    </ProjectWrapper>
  </>
);
}
export default Projects;