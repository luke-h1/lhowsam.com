import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/sanity';
import { rehypePlugins } from '@src/utils/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import styles from './project-slug.module.scss';

interface Props {
  project: Project;
  source: { compiledSource: string };
}

const ProjectSlugPage = ({ project, source }: Props) => {
  const router = useRouter();
  return (
    <Page>
      <NextSeo
        title={project.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={project.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `${project.title} | lhowsam.com`,
        }}
      />
      <article className={styles.article}>
        <PageHeader title={project.title} />
        <Tags tags={project.tags} type="projects" />
        <MDXRemote compiledSource={source.compiledSource} />
      </article>
    </Page>
  );
};
export default ProjectSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await projectService.getSlugs();
  const paths = projects.map(project => ({
    params: { slug: project.slug.current },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: [],
      notFound: true,
    };
  }
  const project = await projectService.getProject(params.slug as string);
  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }

  const source = await serialize(project.content, {
    mdxOptions: {
      rehypePlugins,
    },
  });

  return {
    props: {
      project,
      source,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
