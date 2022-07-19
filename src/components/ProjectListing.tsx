import { Project } from '@src/types/sanity';
import ProjectItem from './ProjectItem';
import styles from './ProjectListing.module.scss';

interface Props {
  projects: Project[];
}

const ProjectListing = ({ projects }: Props) => {
  return (
    <div className={styles.projects}>
      <ol className={styles.list}>
        {projects &&
          projects.map(project => (
            <li key={project._id} className={styles.hit}>
              <ProjectItem project={project} />
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ProjectListing;
