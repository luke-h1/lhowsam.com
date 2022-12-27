import { Project } from '@frontend/types/sanity';
import Link from 'next/link';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import Tags from '../Tags/Tags';
import styles from './ProjectItem.module.scss';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.project} key={project.title}>
      <Link
        href={`/projects/${project.slug.current}`}
        passHref
        data-testid="project-link"
        className={styles.projectItemLink}
      >
        <h3 className={styles.title} data-testid="project-title">
          {project.title}
        </h3>
        <p className={styles.description} data-testid="project-intro">
          {project.intro}
        </p>
      </Link>
      <div className={styles.tags}>
        <Tags tags={project.tags} key={project._id} />
      </div>

      <div className={styles.links}>
        {project.siteUrl && (
          <a href={project.siteUrl} className={styles.link}>
            Deployed project
            <span className="visually-hidden">{`${' '} ${project.title}`}</span>
            <AiOutlineLink />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className={styles.link}
            data-testid="project-github"
          >
            View source
            <span className="visually-hidden">{`${' '} for ${
              project.title
            }`}</span>
            <AiFillGithub />
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectItem;
