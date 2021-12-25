import { Project } from '@src/types/project';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import styles from './card.module.css';

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <a className={styles.card}>
        <div>
          <h3>
            {project.title} <span className={styles.arrow}>&rarr;</span>
          </h3>
          <p>{project.intro}</p>
          <span>
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
          </span>
        </div>
      </a>
    </Link>
  );
};
export default Card;
