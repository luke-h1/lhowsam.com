import imageService from '@frontend/services/imageService';
import { Project } from '@frontend/types/sanity';
import Image from 'next/image';
import { FiGithub, FiLink } from 'react-icons/fi';
import Box from '../Box';
import Heading from '../Heading';
import Link from '../Link';
import Spacer from '../Spacer';
import Text from '../Text';
import VisuallyHidden from '../VisuallyHidden';
import * as styles from './ProjectItem.css';

interface Props {
  project: Project;
}

export default function ProjectItem({ project }: Props) {
  return (
    <Box as="article" display={{ md: 'flex' }} alignItems="flex-start" gap="md">
      <Box
        display="flex"
        float={{ sm: 'right', md: 'none' }}
        flexShrink={0}
        marginTop="xs"
        marginLeft={{ sm: 'sm', md: 'none' }}
        marginBottom={{ sm: 'sm', md: 'none' }}
      >
        <Image
          src={imageService.urlFor(project.image.asset) ?? ''}
          alt={project.image.alt ?? project.title}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL={imageService.urlFor(project.image.asset) ?? ''}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Link href={`/projects/${project.slug.current}`} testId="project-link">
        <Box paddingBottom="lg" className={styles.content}>
          <Spacer height="xs" />
          <Heading
            as="h3"
            fontSize="xl"
            style={{ lineHeight: 1.2 }}
            className={styles.anchor}
            testId="project-title"
          >
            {project.title}
          </Heading>
          <>
            <Spacer height="sm" />
            <Text>{project.intro}</Text>
          </>
        </Box>
      </Link>
      <Box display="flex" alignItems="stretch" className={styles.links}>
        <Link
          testId="project-github"
          href={project.githubUrl}
          css={{
            marginRight: '1rem',
          }}
        >
          <VisuallyHidden>View GitHub</VisuallyHidden>
          <FiGithub size={18} name="GitHub" />
        </Link>
        {project.siteUrl && (
          <Link href={project.siteUrl} testId="project-siteUrl">
            <VisuallyHidden>View site</VisuallyHidden>
            <FiLink size={18} name="Link" />
          </Link>
        )}
      </Box>
    </Box>
  );
}
