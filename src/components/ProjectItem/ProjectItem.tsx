import { Project } from '@src/types/sanity';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './ProjectItem.module.scss';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <Link
      href={`/projects/${project.slug.current}`}
      className={styles.thumbnail}
      passHref
    >
      <span className={styles.thumbnail} data-testid="project-item">
        <div className={styles.content}>
          <h3 className={styles.title} data-testid="project-title">
            {project.title}
          </h3>

          <p className={styles.excerpt} data-testid="project-intro">
            {project.intro}
          </p>

          <div className={styles.stack}>
            <div className={styles.links}>
              {project.siteUrl && (
                <a href={project.siteUrl} className={styles.link}>
                  <FiExternalLink aria-label="Deployed site link" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className={styles.link}
                  data-testid="project-github"
                >
                  <FiGithub aria-label="Github" />
                </a>
              )}
            </div>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default ProjectItem;
