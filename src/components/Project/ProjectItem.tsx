import { Project } from '@frontend/types/sanity';
import Link from 'next/link';
import { Link2, GitHub } from 'react-feather';
import s from './Project.module.scss';

interface Props {
  project: Project;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectItem = ({ project }: Props) => {
  return (
    <div className={s.project}>
      <Link
        href={`/projects/${project.slug.current}`}
        aria-label={project.title}
        data-testid="project-link"
      >
        {/* <div
          className={cn(s.imageWrapper, {
            [s.small]: small,
          })}
        >
          {project.image && (
            <div className={s.imageAnimationWrapper}>
              <div
                className={s.image}
              >
                <Image
                  src={imageService.urlFor(project.image.asset)}
                  // layout={layout}
                  // width={imageWidth}
                  // height={imageHeight}
                  layout="fill"
                  alt={project.title}
                  loading="eager"
                />
              </div>
            </div>
          )}
        </div> */}
        <h3 className={s.title} data-testid="project-title">
          {project.title}
        </h3>
        <p className={s.description} data-testid="project-intro">
          {project.intro}
        </p>
      </Link>
      <div className={s.meta}>
        {project.siteUrl && (
          <a href={project.siteUrl} className={s.link}>
            Visit deployed project
            <Link2 />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className={s.link} data-testid="github">
            Visit Github Repo
            <GitHub />
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectItem;
