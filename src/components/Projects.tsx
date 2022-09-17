import { Project } from '@src/types/sanity';
import ProjectPreview from './ProjectPreview';

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <section style={{ marginBottom: '12rem' }}>
      <div>
        {projects &&
          projects.map(project => (
            <ProjectPreview project={project} key={project._id} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
