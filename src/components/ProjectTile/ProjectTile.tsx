'use client';

import imageService from '@frontend/services/imageService';
import * as buttonStyles from '@frontend/styles/button.css';
import { Project } from '@frontend/types/sanity';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import Image from 'next/image';
import Link from '../Link/Link';
import * as styles from './ProjectTile.css';

interface Props {
  project: Project;
}

const ProjectTile = ({ project }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild id="projectsTrigger">
        <div className={styles.container}>
          <Image
            src={imageService.urlFor(project.image.asset)}
            blurDataURL={imageService.urlFor(project.image.asset)}
            alt={project.image.alt ?? project.title}
            className={styles.image}
            width={220}
            height={220}
          />
          <div className={styles.col}>
            <div>
              <h3 className={clsx(styles.tileTitle, styles.inline)}>
                {project.title}
              </h3>
            </div>
          </div>
          <p className={styles.intro}>{project.intro}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          onOpenAutoFocus={e => e.preventDefault()}
        >
          <Image
            src={imageService.urlFor(project.image.asset)}
            blurDataURL={imageService.urlFor(project.image.asset)}
            alt={project.image.alt ?? project.title}
            className={styles.imageInModal}
            width={600}
            height={600}
          />
          <div className={styles.stack}>
            <div className={styles.top}>
              <Dialog.Title className={styles.modalTitle}>
                {project.title}
              </Dialog.Title>
            </div>
            <span className={styles.introInModal}>{project.intro}</span>
            <div className={styles.row}>
              <Link
                className={buttonStyles.primaryButton}
                href={`/projects/${project.slug.current}`}
              >
                <span>Learn More</span>
                <span className={styles.externalIcon}>↗</span>
              </Link>
              <Link
                className={buttonStyles.primaryButton}
                href={project.githubUrl}
              >
                <span>GitHub repository</span>
                <span className={styles.externalIcon}>↗</span>
              </Link>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default ProjectTile;
