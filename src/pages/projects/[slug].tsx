import Page from '@src/components/Page';
import projectService from '@src/services/projectService';
import { Project } from '@src/types/project';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  project: Project;
  source: { compiledSource: string };
}

const ProjectSlugPage = ({ project, source }: Props) => {
  return (
    <Page title={`${project.title} | lhowsam.com`} description={project.intro}>
      <div className="container">
        <header>
          <h1 data-testid="project-title">{project.title}</h1>
        </header>
        <p className="blog-meta">
          Tech Stack:
          {project.tech &&
            project.tech.map(t => (
              <small className="tech" key={t}>
                {t}
              </small>
            ))}
        </p>
        <article>
          <MDXRemote {...source} />
        </article>
      </div>
    </Page>
  );
};
export default ProjectSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await projectService.getProjectsBySlug();
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
  const { project } = await projectService.getProject(params.slug as string);
  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await serialize(project.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: {
      project,
      source,
    },
    revalidate: 30 * 60,
  };
};
