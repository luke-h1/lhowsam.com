import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import ProjectPost from '../../templates/ProjectPost';
import MDXComponents from '../../components/MDXComponents/MDXComponents';

export default function Project({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <ProjectPost frontMatter={frontMatter}>{content}</ProjectPost>;
}

export async function getStaticPaths() {
  const posts = await getFiles('project');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('project', params.slug);
  return { props: post };
}
