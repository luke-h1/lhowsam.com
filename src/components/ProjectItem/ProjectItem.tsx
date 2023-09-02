import { Project } from '@frontend/types/sanity';
import { GitHub, Link as FeatherLink } from 'react-feather';
import Box from '../Box/Box';
import Card from '../Card/Card';
import Link from '../Link/Link';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <Card key={project._id}>
      <figure>
        <Link href={`/projects/${project.slug.current}`} data-testid='project-title'>
          <blockquote>
            <Text>{project.title}</Text>
          </blockquote>
        </Link>
        <Spacer height="lg" />
        <Box as="figcaption" display="flex" gap="md">
          <Box display="flex" alignItems="flex-start" flexShrink={0} />
          <Box marginBottom="md">
            <Text color="foregroundNeutral" fontSize="sm" data-testid='project-intro'>
              {project.intro}
            </Text>
          </Box>
          {project.siteUrl && (
            <Text color="foregroundNeutral" fontSize="sm">
              <Link href={project.siteUrl}>
                <FeatherLink
                  size="13"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </Link>
            </Text>
          )}
          {project.githubUrl && (
            <Text color="foregroundNeutral" fontSize="sm">
              <Link href={project.githubUrl}>
                <GitHub
                  size="13"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </Link>
            </Text>
          )}
        </Box>
      </figure>
    </Card>
  );
};
export default ProjectItem;
