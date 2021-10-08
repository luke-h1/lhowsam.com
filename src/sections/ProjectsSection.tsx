import React from 'react';
import { projects, Project } from '@src/data/projects';
import styles from '@src/styles/projects.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { MdWebAsset } from 'react-icons/md';

export const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="section__title">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects
          && projects.map((project) => {
            return <ProjectItem project={project} key={project.id} />;
          })}
      </div>
    </section>
  );
};

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.projectItem}>
      <header className={styles.projectItemheader}>{project.title}</header>
      <div className={styles.projectItemBody}>
        <p>{project.intro}</p>
      </div>
      <footer className={styles.projectItemFooter}>
        {project.siteUrl && (
          <a href={project.siteUrl}>
            <MdWebAsset fontSize="20px" />
          </a>
        )}
        <a href={project.githubUrl}>
          <AiFillGithub fontSize="20px" />
        </a>
      </footer>
    </div>
  );
};
