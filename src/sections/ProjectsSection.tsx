import React from 'react';
import projects from '@src/data/projects';
import ProjectItem from '@src/components/ProjectItem';
import { ProjectsContainer } from '../styles/project';

export const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="section__title">Projects</h1>
      <ProjectsContainer>
        {projects
          && projects.map((project) => {
            return <ProjectItem project={project} key={project.id} />;
          })}
      </ProjectsContainer>
    </section>
  );
};
