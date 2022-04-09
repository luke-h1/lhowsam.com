import projectService from '@src/services/projectService';
import { Project } from '@src/types/project';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  projects: Project[];
}

const ProjectIndexPage = ({ projects }: Props) => {
  const router = useRouter();
  return (
    <>
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
      hi
    </>
  );
};
export default ProjectIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await projectService.getAllProjects();

  return {
    props: {
      projects: projects.projects,
    },
    revalidate: 30 * 60,
  };
};
