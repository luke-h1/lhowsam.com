import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Project } from 'studio/types/schema';
import Tags from './Tags';
import styles from './projectcard.module.scss';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.project} data-testid="project-list">
      <Link href={`/projects/${project.slug.current}`}>
        <a>
          <h3 className={styles.title} data-testid="project-title">
            {project.title}
          </h3>

          <p className={styles.description} data-testid="project-intro">
            {project.intro}
          </p>
        </a>
      </Link>
      <div className={styles.taglist} style={{ marginBottom: '15px' }}>
        <Tags tags={project.tags} testId="project-tag" type="projects" />
      </div>
      <div className={styles.links}>
        {project.siteUrl && (
          <a href={project.siteUrl} className={styles.link}>
            <FaLink aria-label="Deployed site link" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className={styles.link}
            data-testid="project-github"
          >
            <FaGithub aria-label="Github" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
