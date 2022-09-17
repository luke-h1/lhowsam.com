import imageService from '@src/services/imageService';
import { Project } from '@src/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href={`/projects/${project.slug.current}`} passHref>
            <a data-testid="project-link">
              <h4 className={styles.cardTitle} data-testid="project-title">
                {project.title}
              </h4>
              <Image
                src={imageService.urlFor(project.image.asset)}
                width="400px"
                height="255px"
                placeholder="blur"
                blurDataURL={imageService.urlFor(project.image.asset)}
                className="curved-image"
              />
            </a>
          </Link>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <p data-testid="project-intro">{project.intro}</p>
            </div>

            <div className={styles.tagsContainer}>
              <Tags tags={project.tags} key={project._id} />
            </div>
            <div className={styles.linksContainer}>
              {project.siteUrl && (
                <a href={project.siteUrl} color="white" className="button">
                  View live project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  color="pink"
                  className="button"
                  data-testid="project-github"
                >
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
