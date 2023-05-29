import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import { Metadata } from 'next';
import Box from '../(components)/Box/Box';
import Heading from '../(components)/Heading/Heading';
import List from '../(components)/List/List';
import ProjectItem from '../(components)/ProjectItem/ProjectItem';
import Spacer from '../(components)/Spacer/Spacer';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectPage = async () => {
  let projects: Project[] = [];

  const allProjects = await projectService.getAllProjects();

  if (allProjects.length > 0) {
    projects = allProjects;
  }

  return (
    <Box
      as="header"
      textAlign={{ md: 'center' }}
      maxWidth="container"
      marginX="auto"
    >
      <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
        Projects
      </Heading>
      <Spacer height="sm" />
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        {projects &&
          projects.map(project => (
            <List key={project._id}>
              <Spacer height="xxl" />
              <ProjectItem project={project} />
            </List>
          ))}
      </Box>
    </Box>
  );
};
export default ProjectPage;
