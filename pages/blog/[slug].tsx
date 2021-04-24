import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '@src/utils/mdx';
import MDXComponents from '@src/components/MDXComponents';
import { BlogPost } from '@src/types';
import { MdxRemote } from 'next-mdx-remote/types';
import BlogLayout from '@src/layouts/BlogLayout';

interface BlogProps {
  mdxSource: MdxRemote.Source;
  frontMatter: BlogPost;
}

const Blog = ({ mdxSource, frontMatter }: BlogProps) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
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
