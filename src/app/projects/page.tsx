import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import ProjectItem from '@frontend/components/Project/ProjectItem';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';
import s from '../index.module.scss';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectPage = async () => {
  const projects = await projectService.getAllProjects();

  return (
    <Page>
      <PageHeader title="Projects" />

      <div className={s.grid}>
        {projects &&
          projects.map(project => (
            <ProjectItem key={project._id} project={project} />
          ))}
      </div>
    </Page>
  );
};

export default ProjectPage;
