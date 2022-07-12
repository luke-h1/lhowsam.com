import { Project } from '@src/types/sanity';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './ProjectItem.module.scss';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.thumbnail}>
      <span className={styles.thumbnail}>
        <div className={styles.content} data-testid="project-item">
          <Link href={`/projects/${project.slug.current}`} passHref>
            <h3 className={styles.title} data-testid="project-title">
              {project.title}
            </h3>
          </Link>

          <p className={styles.excerpt} data-testid="project-intro">
            {project.intro}
          </p>

          <div className={styles.stack}>
            <div className={styles.links}>
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink aria-label="Deployed site link" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="project-github"
                >
                  <FiGithub aria-label="Github" />
                </a>
              )}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ProjectItem;
