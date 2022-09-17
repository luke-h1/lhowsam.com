import imageService from '@src/services/imageService';
import { Project } from '@src/types/sanity';
import Image from 'next/image';
import styles from './ProjectPreview.module.scss';
import Tags from './Tags';

interface Props {
  project: Project;
}

const ProjectPreview = ({ project }: Props) => {
  return (
    <div className={styles.projectPreview}>
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <h4 className={styles.cardTitle}>{project.title}</h4>
          <Image
            src={imageService.urlFor(project.image.asset)}
            width="400px"
            height="255px"
            placeholder="blur"
            blurDataURL={imageService.urlFor(project.image.asset)}
            className="curved-image"
          />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <p>{project.intro}</p>
            </div>

            <div className={styles.tagsContainer}>
              <Tags tags={project.tags} />
            </div>
            <div className={styles.linksContainer}>
              {project.siteUrl && (
                <a href={project.siteUrl} color="white" className="button">
                  View live project
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} color="pink" className="button">
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
