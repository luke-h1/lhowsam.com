import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import ProjectItem from '@frontend/components/Project/ProjectItem';
import Button from '@frontend/components/form/Button/Button';
import siteConfig from '@frontend/config/site';
import { HighlightedProjectsQuery } from '@frontend/graphql/generated';
import projectService from '@frontend/services/projectService';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { ArrowRight } from 'react-feather';
import s from './index.module.scss';

interface Props {
  projects: HighlightedProjectsQuery['projects'];
}

const Indexpage: NextPage<Props> = ({ projects }) => {
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
      <Page>
        <PageHeader
          title="Luke // Software Engineer"
          description="Software Engineer based in the UK who is interested in React.js, Next.js, Typescript, Python and DevOps"
        >
          <Button href="/about" type="button">
            More about me
          </Button>
        </PageHeader>

        <h2>Highlighted projects</h2>
        <div className={s.all}>
          <Link href="/projects">
            View all
            <ArrowRight />
          </Link>
        </div>
        {projects &&
          projects.map(project => (
            <ProjectItem project={project} key={project.id} />
          ))}
      </Page>
    </>
  );
};
export default Indexpage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await projectService.getHighlightedProjects();

  return {
    props: {
      projects,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
