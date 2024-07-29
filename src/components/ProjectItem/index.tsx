import imageService from '@frontend/services/imageService';
import { Project } from '@frontend/types/sanity';
import { FiGithub, FiLink } from 'react-icons/fi';
import Box from '../Box';
import { Heading } from '../Heading';
import { Image } from '../Image';
import Link from '../Link';
import Text from '../Text';
import VisuallyHidden from '../VisuallyHidden';
import * as styles from './ProjectItem.css';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <Box className={styles.outer}>
      <Box className={styles.container}>
        <Image
          className={styles.image}
          src={imageService.urlFor(project.image.asset)}
          alt={project.image.alt ?? project.title}
          width={400}
          height={220}
          data-testid="project-image"
          priority
          quality={80}
          layout="responsive"
        />
        <Box className={styles.stack}>
          <Link
            href={`/projects/${project.slug.current}`}
            data-testid="project-link"
          >
            <Box className={styles.row}>
              <Heading
                as="h3"
                className={styles.tileTitle}
                data-testid="project-title"
              >
                {project.title}
              </Heading>
            </Box>

            <Text className={styles.tileContent} data-testid="project-intro">
              {project.intro}
            </Text>
          </Link>
          <Box
            display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            className={styles.links}
          >
            <Link
              data-testid="project-github"
              href={project.githubUrl}
              css={{
                marginRight: '1rem',
              }}
            >
              <VisuallyHidden>View GitHub</VisuallyHidden>
              <FiGithub size={18} name="GitHub" />
            </Link>
            {project.siteUrl && (
              <Link href={project.siteUrl} data-testid="project-siteUrl">
                <VisuallyHidden>View site</VisuallyHidden>
                <FiLink size={18} name="Link" />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItem;
