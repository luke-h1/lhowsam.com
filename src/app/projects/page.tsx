import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import * as List from '@frontend/components/List';
import Page from '@frontend/components/Page';
import ProjectItem from '@frontend/components/ProjectItem';
import Text from '@frontend/components/Text';
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
    <Page>
      <Box>
        <Heading fontSize="xxl" as="h1" testId="project-heading">
          Projects
        </Heading>
        <Text
          color="foregroundNeutral"
          fontSize="lg"
          testId="project-description"
        >
          Personal projects I've worked on
        </Text>
      </Box>
      <List.Container>
        {projects &&
          projects.map(project => (
            <List.Item key={project.slug.current}>
              <ProjectItem key={project.slug.current} project={project} />
            </List.Item>
          ))}
      </List.Container>
    </Page>
  );
};
export default ProjectPage;
