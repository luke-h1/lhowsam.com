import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import ProjectItem from '@frontend/components/ProjectItem/ProjectItem';
import Spacer from '@frontend/components/Spacer/Spacer';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';

// TODO - generate metadata
// TODO - does Next.js Dynamic still work?

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
