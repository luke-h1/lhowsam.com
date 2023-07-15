import BlogImage from '@frontend/components/BlogImage/BlogImage';
import ContentRenderer from '@frontend/components/ContentRenderer';
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Button from '@frontend/components/form/Button/Button';
import imageService from '@frontend/services/imageService';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import s from '../blog/post.module.scss';

interface Props {
  project: Project;
  compiledSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const ProjectSlugPage: NextPage<Props> = ({ project, compiledSource }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={project.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={project.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `${project.title} | lhowsam.com`,
          article: {
            authors: ['Luke Howsam'],
          },
        }}
      />
      <Page>
        {project.image && (
          <BlogImage
            src={imageService.urlFor(project.image.asset)}
            alt={project.title}
            className={s.image}
          />
        )}
        <PageHeader title={project.title} compact />
        <article className={s.article}>
          <ContentRenderer compiledSource={compiledSource.compiledSource} />
        </article>
        <div className={s.buttons}>
          <Button type="button" href="/projects">
            Back to projects
          </Button>
        </div>
      </Page>
    </>
  );
};
export default ProjectSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params?: { slug: string };
}) => {
  const project = await projectService.getProject(params?.slug as string);

  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }

  const { compiledSource } = await mdxToHtml(project.content);

  return {
    props: {
      project,
      compiledSource,
    },
  };
};
