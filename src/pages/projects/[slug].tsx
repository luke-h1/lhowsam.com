import mdxPrism from '@mapbox/rehype-prism';
import components from '@src/components/Mdx';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import projectService, { Project } from '@src/services/projectService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CodeTitle from 'rehype-code-titles';
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
      <PageHeader title={project.title}>
        <Tags tags={project.tags} type="projects" />
      </PageHeader>
      <article className={styles.article}>
        <MDXRemote
          compiledSource={source.compiledSource}
          components={components}
        />{' '}
      </article>
    </Page>
  );
};
export default ProjectSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await projectService.getProjectsBySlug();
  const paths = projects.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
      rehypePlugins: [mdxPrism, CodeTitle],
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
