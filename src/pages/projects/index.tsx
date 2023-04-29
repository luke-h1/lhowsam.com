import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import ProjectItem from '@frontend/components/ProjectItem/ProjectItem';
import Spacer from '@frontend/components/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import { Project } from '@frontend/graphql/generated/generated';
import projectService from '@frontend/services/projectService';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

interface Props {
  projects: Project[];
}

const ProjectPage: NextPage<Props> = ({ projects }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Projects"
        canonical={`https://lhowsam.com/${router.asPath}`}
        description="Projects"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Projects | lhowsam.com`,
        }}
      />
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
              <List key={project.id}>
                <Spacer height="xxl" />
                <ProjectItem project={project} />
              </List>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await projectService.getProjects();

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
