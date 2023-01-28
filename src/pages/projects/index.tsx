import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import ProjectItem from '@frontend/components/ProjectItem/ProjectItem';
import Spacer from '@frontend/components/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  projects: Project[];
}

const ProjectPage: NextPage<Props> = ({ projects }) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await projectService.getAllProjects();

  if (!projects.length) {
    return {
      props: {
        projects: [],
      },
    };
  }

  return {
    props: {
      projects,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
