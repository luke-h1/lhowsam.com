import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import ProjectItem from '@frontend/components/ProjectItem/ProjectItem';
import Spacer from '@frontend/components/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import projectQueries from '@frontend/queries/projectQueries';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

const ProjectPage: NextPage = () => {
  const router = useRouter();

  const { data: projects } = useQuery({
    ...projectQueries.getAllProjects(),
    staleTime: siteConfig.defaultRevalidate,
  });

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
              <List key={`${project._id}-${project.title}`}>
                <Spacer height="xxl" />
                <ProjectItem project={project} key={project._id} />
              </List>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: siteConfig.defaultRevalidate,
      },
    },
  });

  await Promise.all([
    queryClient.prefetchQuery(projectQueries.getAllProjects()),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
