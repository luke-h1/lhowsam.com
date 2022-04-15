import { Project } from '@src/types/project';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import ProjectTags from './ProjectTags';
import styles from './projectcard.module.scss';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.project} data-testid="project-list">
      <Link href={`/projects/${project.slug}`}>
        <a>
          <h4 className={styles.title} data-testid="project-title">
            {project.title}
          </h4>

          <p className={styles.description} data-testid="project-intro">
            {project.intro}
          </p>
        </a>
      </Link>
      <div className={styles.taglist} style={{ marginBottom: '15px' }}>
        <ProjectTags tags={project.tech} testId="project-tag" />
      </div>
      <div className={styles.links}>
        {project.siteUrl && (
          <a href={project.siteUrl} className={styles.link}>
            <FaLink />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className={styles.link}
            data-testid="project-github"
          >
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
