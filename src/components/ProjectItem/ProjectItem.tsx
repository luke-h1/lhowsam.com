import { Project } from '@frontend/graphql/generated/generated';
import { theme } from '@frontend/styles/theme.css';
import Box from '../Box/Box';
import Link from '../Link/Link';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';
import * as styles from './ProjectItem.css';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <article>
      <div className={styles.content}>
        <Link
          href={`/projects/${project.slug}`}
          variant="neutral"
          data-testid="project-link"
        >
          <h2 data-testid="project-title">{project.title}</h2>
          <p>{project.intro}</p>
        </Link>
        <br />
      </div>
      <Box
        as="div"
        display="flex"
        flexDirection="row"
        justifyContent="stretch"
        marginBottom={{ xs: 'sm', sm: 'md' }}
      >
        {project.siteUrl && (
          <Link href={project.siteUrl} className={styles.anchor}>
            <Text>Deployed project</Text>
          </Link>
        )}
        {project.githubUrl && (
          <Link href={project.githubUrl} className={styles.anchor}>
            <Text data-testid="github">Github</Text>
          </Link>
        )}
      </Box>
      <Spacer
        height="sm"
        style={{
          borderTop: `1px solid ${theme.color.borderFaint}`,
        }}
      />
    </article>
  );
};
export default ProjectItem;
