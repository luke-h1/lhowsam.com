import { Project } from '@src/types/project';
import { AiFillGithub } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import styles from './card.module.css';

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <a className={styles.card}>
      <div>
        <h3 data-testid="project-title">
          {project.title} <span className={styles.arrow}>&rarr;</span>
        </h3>
        <p data-testid="project-intro">{project.intro}</p>
        <span>
          {project.githubUrl && (
            <a href={project.githubUrl} data-testid="github-url">
              <AiFillGithub />
            </a>
          )}
          {project.siteUrl && (
            <a href={project.siteUrl} data-testid="site-url">
              <FaLink />
            </a>
          )}
        </span>
        <div className="tag-container">
          {project.tech &&
            project.tech.map(t => (
              <span className="tag tag--pill tag--sm" key={t}>
                <small>{t}</small>
              </span>
            ))}
        </div>
      </div>
    </a>
  );
};
export default Card;
