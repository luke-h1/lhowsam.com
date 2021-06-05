import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@src/components/MDXComponents';
import { getFiles, getFileBySlug } from '@src/utils/mdx';
import ProjectLayout from '@src/layouts/ProjectLayout';

// interface ProjectProps {
//   mdxSource: MdxRemote.Source;
//   frontMatter: ProjectPost;
// }

const Project = ({ mdxSource, frontMatter }: any) => {
  return (
    <ProjectLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </ProjectLayout>
  );
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
