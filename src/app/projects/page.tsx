import Box from '@frontend/components/Box';
import { List } from '@frontend/components/List';
import Page from '@frontend/components/Page';
import ProjectItem from '@frontend/components/ProjectItem';
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
    <Page heading="Projects" description="Personal projects">
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        <List>
          {projects &&
            projects.map(project => (
              <List.Item key={project._id}>
                <ProjectItem project={project} />
              </List.Item>
            ))}
        </List>
      </Box>
    </Page>
  );
};
export default ProjectPage;
