/* eslint-disable import/no-duplicates */
import blogService from '@src/services/blogService';
import { Post } from '@src/types/post';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import CodeTitle from 'rehype-code-titles';
import styles from './blog-slug.module.scss';

interface Props {
  post: Post;
  source: { compiledSource: string };
}

const BlogSlugPage = ({ post, source }: Props) => {
  const router = useRouter();

  return <>hi</>;
};
export default BlogSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await blogService.getPostsBySlug();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

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

  const { post } = await blogService.getPost(params.slug as string);
  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }

  const source = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism, CodeTitle],
    },
  });

  return {
    props: {
      post,
      source,
    },
    revalidate: 30 * 60,
  };
};
