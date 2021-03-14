import hydrate from 'next-mdx-remote/hydrate';
import { NextPage } from 'next';
import MDXComponents from '@components/MDXComponents';
import { getFiles, getFileBySlug } from '@utils/mdx';
import { ProjectPost } from '@src/types';
import ProjectLayout from '@src/layouts/ProjectLayout';

interface ProjectProps {
  mdxSource: MdxRemote.Source;
  frontMatter: ProjectPost;
}

const Project: NextPage = ({ mdxSource, frontMatter }: ProjectProps) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });
  return <ProjectLayout frontMatter={frontMatter}>{content}</ProjectLayout>;
};

export async function getStaticPaths() {
  const projectMdxFiles = await getFiles('project');

  return {
    paths: projectMdxFiles.map((project) => ({
      params: {
        slug: project.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getFileBySlug('project', params.slug);
  return { props: project };
}
export default Project;
