import Page from '@frontend/components/Page';
import ProjectItem from '@frontend/components/ProjectItem';
import Skills from '@frontend/components/Skills';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  projects: Project[];
}

const Home = ({ projects }: Props) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Home"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Home"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Home | lhowsam.com`,
        }}
      />
      <Page title="Home" showHero>
        <h2 style={{ marginBottom: '2.5rem' }} className="title">
          Highlighted projects:
        </h2>
        {projects &&
          projects.map(project => (
            <ProjectItem key={project._id} project={project} />
          ))}
        <h4 className="title">Skills:</h4>
        <Skills />
      </Page>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await projectService.getRecentProjects();

  return {
    props: {
      projects,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
