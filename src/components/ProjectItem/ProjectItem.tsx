/* eslint-disable react/jsx-no-target-blank */
import { Project } from '@frontend/types/sanity';
import Link from '../Link/Link';
import Text from '../Text/Text';
import * as styles from './ProjectItem.css';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h2>{project.title}</h2>
      </div>
      <div>
        <Text style={{ textAlign: 'left', marginBottom: '1rem' }}>
          {project.intro}
        </Text>
      </div>
      <div className={styles.links}>
        {project.siteUrl && (
          // eslint-disable-next-line react/jsx-no-target-blank
          <Link
            href={`/projects/${project.slug.current}`}
            className={styles.buttonLink}
          >
            article
          </Link>
        )}
        {project.githubUrl && (
          <Link className={styles.buttonLink} href={project.githubUrl}>
            Github
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
