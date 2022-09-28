import Page from '@frontend/components/Page';
import Share from '@frontend/components/Share';
import Tags from '@frontend/components/Tags';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import mdxToHtml from '@frontend/utils/mdx';
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
          <Tags tags={project.tags} key={project._id} />
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
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = await projectService.getProject(params?.slug as string);

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
