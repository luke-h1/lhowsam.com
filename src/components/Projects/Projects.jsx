/* eslint-disable */
import React from 'react';
import {
  ProjectWrapper,
  CardWrap,
  ProjectTitle,
  CardContainer,
} from './ProjectsElements';

import ProjectPreview from '../ProjectPreview/ProjectPreview';
import projectData from '../../data/data';
const Projects = () => {
  return (
  <>
    <ProjectWrapper>
      <ProjectTitle>My Projects</ProjectTitle>
      <CardContainer>
        <CardWrap>
          {projectData.map((project) => (
           <ProjectPreview key={project.slug} project={project} /> 
          ))}
        </CardWrap>
      </CardContainer>
    </ProjectWrapper>
  </>
);
}
export default Projects;
