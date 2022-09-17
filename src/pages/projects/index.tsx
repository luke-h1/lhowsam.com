import Page from '@src/components/Page';
import Projects from '@src/components/Projects';
import siteConfig from '@src/config/site';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/sanity';
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
      <Projects projects={projects} />
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
