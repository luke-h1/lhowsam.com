import ProjectCard from '@src/components/ProjectCard';
import { ProjectWrapper } from '@src/styles/project';
import { Title } from '@src/styles/typography';
import React from 'react';
import { Project } from '../types/project';

interface Props {
  projects: Project[];
}

const ProjectSection = ({ projects }: Props) => {
  return (
    <>
      <Title size={2.3}>Projects</Title>
      <ProjectWrapper>
        {projects &&
          projects.map(project => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </ProjectWrapper>
    </>
  );
};
export default ProjectSection;
