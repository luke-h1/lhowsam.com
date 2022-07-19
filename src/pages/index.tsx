import Button from '@src/components/Button';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import ProjectItem from '@src/components/ProjectItem';
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
    <Page>
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
      <PageHeader
        title="Hey, I'm Luke"
        description="I currently work as a Software Engineer. I like building projects that are scalable, performant & user friendly."
      >
        <Button href="/about">More about me</Button>
      </PageHeader>
      <div className="flex">
        <h2
          className="title"
          style={{ marginBottom: '50px', marginTop: '50px', textAlign: 'left' }}
        >
          Featured Projects
        </h2>
        <div className="project-container">
          {projects &&
            projects.map(project => (
              <ProjectItem project={project} key={project._id} />
            ))}
        </div>
        <h3 className="title">Skills</h3>
        <Skills />
      </div>
    </Page>
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
