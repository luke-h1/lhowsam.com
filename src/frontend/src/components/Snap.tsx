import { Project } from 'lhowsam-studio/types/schema';
import styles from './snap.module.css';

interface Props {
  project: Project;
}

const Snap = ({ project }: Props) => {
  return (
    <a className={styles.card}>
      <img alt={project.title} className={styles.img} />
      <div className={styles.body}>
        <h3>
          {project.title} <span className={styles.arrow}>&rarr;</span>
        </h3>
        <p>{project.intro}</p>
      </div>
    </a>
  );
};
export default Snap;
