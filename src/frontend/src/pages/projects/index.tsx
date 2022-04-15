import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import ProjectCard from '@src/components/ProjectCard';
import projectService from '@src/services/projectService';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Project } from 'studio/types/schema';

interface Props {
  projects: Project[];
}

const ProjectIndexPage = ({ projects }: Props) => {
  const router = useRouter();
  return (
    <Page>
      <NextSeo
        title="Projects"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="My projects"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Projects | lhowsam.com`,
        }}
      />
      <PageHeader title="Projects" />
      {projects &&
        projects.map(project => (
          <ProjectCard project={project} key={project._id} />
        ))}
    </Page>
  );
};
export default ProjectIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await projectService.getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 30 * 60,
  };
};
