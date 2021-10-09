import { StyledBlogItem } from '@src/styles/blog';
import { ProjectFooter } from '@src/styles/project';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { MdWebAsset } from 'react-icons/md';
import { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <StyledBlogItem>
      <h2>{project.title}</h2>
      <p>{project.intro}</p>
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
    </StyledBlogItem>
  );
};
export default ProjectItem;
