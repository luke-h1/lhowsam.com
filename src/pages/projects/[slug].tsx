import hydrate from 'next-mdx-remote/hydrate';
import MDXComponents from '@src/components/MDXComponents';
import { getFiles, getFileBySlug } from '@src/utils/mdx';
import { ProjectPost } from '@src/types/md';
import ProjectLayout from '@src/layouts/ProjectLayout';
import { MdxRemote } from 'next-mdx-remote/types';

interface ProjectProps {
  mdxSource: MdxRemote.Source;
  frontMatter: ProjectPost;
}

const Project = ({ mdxSource, frontMatter }: ProjectProps) => {
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = await getFileBySlug('project', params.slug);
  return { props: project };
}
export default Project;
