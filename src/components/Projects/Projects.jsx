/* eslint-disable */
import React from 'react';
import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';

import useProjects from '../../hooks/useProjects';
import ProjectPreview from '../ProjectPreview/ProjectPreview';

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
