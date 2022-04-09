import { Project } from '@src/types/project';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';
import Tag from './Tag';
import styles from './projectcard.module.scss';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.project}>
      <Link href={`/projects/${project.slug}`}>
        <a>
          <h3 className={styles.title}>{project.title}</h3>

          <p className={styles.description}>{project.intro}</p>
        </a>
      </Link>
      <div className="taglist" style={{ marginBottom: '15px' }}>
        {project.tech && project.tech.map(t => <Tag text={t} key={t} />)}
      </div>
      <div className={styles.links}>
        {project.siteUrl && (
          <a href={project.siteUrl} className={styles.link}>
            <FaLink />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className={styles.link}>
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
