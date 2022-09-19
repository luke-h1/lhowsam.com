import Page from '@src/components/Page';
import ProjectPreview from '@src/components/ProjectPreview';
import Skills from '@src/components/Skills';
import siteConfig from '@src/config/site';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/sanity';
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
        <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem' }}>
          Highlighted projects
        </h2>
        <div className="flex-center">
          {projects &&
            projects.map(project => (
              <ProjectPreview project={project} key={project._id} />
            ))}
        </div>
        <h4 className="title">Skills</h4>
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
