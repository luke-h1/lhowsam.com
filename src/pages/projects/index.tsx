/* eslint-disable import/no-duplicates */
import Page from '@src/components/Page';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/project';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import styles from './project-index.module.css';

interface Props {
  projects: Project[];
}

const ProjectIndexPage = ({ projects }: Props) => {
  return (
    <Page className="container" title="Projects | lhowsam.com">
      <header>
        <h1>Projects</h1>
      </header>
      <main>
        {projects &&
          projects.map(project => (
            <article key={project.id}>
              <header>
                <Link href={`/projects/${project.slug}`}>
                  <a>
                    <h2 className={styles.title}>{project.title}</h2>
                  </a>
                </Link>
                <small className={styles.links}>
                  {project.githubUrl && (
                    <a href={project.githubUrl}>
                      <AiFillGithub />
                    </a>
                  )}
                  {project.siteUrl && (
                    <a href={project.siteUrl}>
                      <FaLink />
                    </a>
                  )}
                </small>
              </header>
            </article>
          ))}
      </main>
    </Page>
  );
};
export default ProjectIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await projectService.getAllProjects();

  return {
    props: {
      projects: projects.projects,
    },
  };
};
