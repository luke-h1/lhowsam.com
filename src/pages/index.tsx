import Button from '@src/components/Button';
import ButtonGroup from '@src/components/ButtonGroup';
import Page from '@src/components/Page';
import ProjectCard from '@src/components/ProjectCard';
import Skills from '@src/components/Skills';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/project';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import PageHeader from '../components/PageHeader';

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
        homePage
        title="Hey, I'm Luke"
        description="I'm a software tester based in Sheffield, UK. I'm passionate about building &amp; testing software, and I'm always looking to learn more."
      >
        <Button href="/about">More about me</Button>
      </PageHeader>
      <ButtonGroup>
        <Button>Resume</Button>
        <Button href="/projects">View more</Button>
      </ButtonGroup>
      <h3 className="title" style={{ marginBottom: '50px' }}>
        Featured Projects
      </h3>
      {projects &&
        projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      <h3 className="title">Skills</h3>
      <Skills />
    </Page>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await projectService.getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 30 * 60,
  };
};
