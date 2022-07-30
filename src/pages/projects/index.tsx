import Page from '@src/components/Page';
import ProjectItem from '@src/components/ProjectItem';
import siteConfig from '@src/config/site';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/sanity';
import { GetStaticProps } from 'next';

interface Props {
  projects: Project[];
}

const ProjectPage = ({ projects }: Props) => {
  return (
    <Page title="Projects">
      {projects &&
        projects.map(project => (
          <ProjectItem project={project} key={project._id} />
        ))}
    </Page>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await projectService.getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
