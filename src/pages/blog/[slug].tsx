import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@src/utils/mdx';
import MDXComponents from '@src/components/MDXComponents';
import BlogLayout from '@src/layouts/BlogLayout';

// interface BlogProps {
//   mdxSource: MdxRemote.Source;
//   frontMatter: BlogPost;
// }

const Blog = ({ mdxSource, frontMatter }: any) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getFileBySlug('blog', params.slug);
  return { props: post };
};
export default Blog;
