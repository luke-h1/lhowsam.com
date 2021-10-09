import React from 'react';
import { projects, Project } from '@src/data/projects';
import { AiFillGithub } from 'react-icons/ai';
import { MdWebAsset } from 'react-icons/md';
import {
  ProjectsContainer,
  StyledProjectItem,
  ProjectHeader,
  ProjectContent,
  ProjectFooter,
} from '../styles/project';

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

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <StyledProjectItem>
      <ProjectHeader>{project.title}</ProjectHeader>
      <ProjectContent>
        <p>{project.intro}</p>
      </ProjectContent>
      <ProjectFooter>
        {project.siteUrl && (
          <a href={project.siteUrl}>
            <MdWebAsset fontSize="20px" />
          </a>
        )}
        <a href={project.githubUrl}>
          <AiFillGithub fontSize="20px" />
        </a>
      </ProjectFooter>
    </StyledProjectItem>
  );
};
