import { Project } from '@src/types/sanity';
import Link from 'next/link';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import styles from './ProjectItem.module.scss';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.project} key={project.title}>
      <Link href={`/projects/${project.slug.current}`}>
        <h3 className={styles.title}>{project.title}</h3>
      </Link>
      <p className={styles.description}>{project.intro}</p>

      <div className={styles.links}>
        {project.siteUrl && (
          <a href={project.siteUrl} className={styles.link}>
            Deployed project
            <AiOutlineLink />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className={styles.link}>
            View source
            <AiFillGithub />
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectItem;
