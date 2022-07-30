import Page from '@src/components/Page';
import Share from '@src/components/Share';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import imageService from '@src/services/imageService';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/sanity';
import mdxToHtml from '@src/utils/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import styles from '../blog/slug.module.scss';

interface Props {
  project: Project;
  source: {
    compiledSource: string;
  };
}

const BlogPostPage = ({ project, source }: Props) => {
  const router = useRouter();
  return (
    <Page title={project.title}>
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
      <div className={styles.headerPost}>
        <div className={styles.container}>
          <Tags tags={project.tags} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.postLayout}>
          <div className={styles.socialShare}>
            <span>Share</span>
            <Share
              title={project.title}
              link={`${process.env.NEXT_PUBLIC_URL}/projects/${project.slug.current}`}
            />
          </div>
          <article className={styles.article}>
            <div>
              <MDXRemote compiledSource={source.compiledSource} />
            </div>
          </article>
        </div>
      </div>
    </Page>
  );
};

export default BlogPostPage;

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
    return { props: {}, notFound: true };
  }

  const project = await projectService.getProject(params.slug as string);

  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await mdxToHtml(project.content);

  return {
    props: {
      project,
      source,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
