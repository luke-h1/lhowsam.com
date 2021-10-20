import { Project } from '@lhowsam/cms/types/schema';
import ProjectCard from '@src/components/ProjectCard';
import { ProjectWrapper } from '@src/styles/project';
import { Title } from '@src/styles/typography';
import React from 'react';

interface Props {
  projects: Project[];
}

const ProjectSection = ({ projects }: Props) => {
  return (
    <>
      <Title size={2.3}>Projects</Title>
      <ProjectWrapper>
        {projects &&
          projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
      </ProjectWrapper>
    </>
  );
};
export default ProjectSection;
