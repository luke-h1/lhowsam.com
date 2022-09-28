import Page from '@frontend/components/Page';
import ProjectItem from '@frontend/components/ProjectItem';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  projects: Project[];
}

const ProjectPage = ({ projects }: Props) => {
  const router = useRouter();
  return (
    <Page title="Projects">
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
      {projects &&
        projects.map(project => (
          <ProjectItem project={project} key={project._id} />
        ))}
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await projectService.getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};

export default ProjectPage;
