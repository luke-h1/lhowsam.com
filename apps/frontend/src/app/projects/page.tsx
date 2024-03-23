import Box from '@frontend/components/Box/Box';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import ProjectItem from '@frontend/components/ProjectItem/ProjectItem';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectPage = async () => {
  const projects = await projectService.getAllProjects();

  return (
    <Page heading="Projects">
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        <List>
          {projects &&
            projects.map(project => (
              <ProjectItem project={project} key={project._id} />
            ))}
        </List>
      </Box>
    </Page>
  );
};
export default ProjectPage;
