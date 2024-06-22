'use client';

import imageService from '@frontend/services/imageService';
import {
  tooltip,
  tooltipLarge,
  viewTruncated,
  arrow,
} from '@frontend/styles/util.css';
import { Project } from '@frontend/types/sanity';
import * as Tooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import Image from 'next/image';
import Link from '../Link/Link';
import * as styles from './ProjectTile.css';

interface Props {
  project: Project;
}

const ProjectTile = ({ project }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <div className={styles.iconContainer}>
          <Image
            className={styles.icon}
            priority
            src={imageService.urlFor(project.image.asset)}
            blurDataURL={imageService.urlFor(project.image.asset)}
            height={28}
            width={28}
            alt={project.image.alt ?? project.title}
          />
        </div>
        <Link
          href={`/projects/${project.slug.current}`}
          className={styles.titleLink}
        >
          <h3
            className={styles.tileTitle}
            style={{
              display: 'inline',
            }}
          >
            {project.title}
          </h3>
          <span className={styles.externalIcon}>↗</span>
        </Link>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <span className={styles.tileContent}>{project.intro}</span>
          </Tooltip.Trigger>
          <Tooltip.Content className={clsx(tooltip, tooltipLarge)}>
            <span className={viewTruncated}>
              <Link href={`/projects/${project.slug.current}`}>Read more</Link>
            </span>
            <Tooltip.Arrow className={arrow} />
          </Tooltip.Content>
        </Tooltip.Root>
      </div>
    </div>
  );
};
export default ProjectTile;
