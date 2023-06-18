/* eslint-disable react/jsx-curly-brace-presence */
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import ProjectItem from '@frontend/components/Project/ProjectItem';
import Button from '@frontend/components/form/Button/Button';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';
import s from './index.module.scss';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Home | lhowsam.com',  
}

const Indexpage = async () => {
  const projects = await projectService.getRecentProjects();

  return (
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
          <ProjectItem project={project} key={project._id} />
        ))}
    </Page>
  );
};
export default Indexpage;
