import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import ProjectItem from '@frontend/components/Project/ProjectItem';
import siteConfig from '@frontend/config/site';
import { ProjectsQuery } from '@frontend/graphql/generated';
import projectService from '@frontend/services/projectService';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import s from './index.module.scss';

interface Props {
  projects: ProjectsQuery['projects'];
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
      <Page>
        <PageHeader title="Projects" />
        <div className={s.grid}>
          {projects &&
            projects.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
        </div>
      </Page>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await projectService.getProjects();

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
