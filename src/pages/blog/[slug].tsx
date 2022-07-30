import siteConfig from '@src/config/site';
import postService from '@src/services/postService';
import { Post } from '@src/types/sanity';
import mdxToHtml from '@src/utils/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Props {
  post: Post;
  source: Promise<{
    mdxSource: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
  }>;
}

const BlogPostPage = ({ post, source }: Props) => {
  return <div>post page</div>;
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await postService.getSlugs();
  const paths = posts.map(post => ({ params: { slug: post.slug.current } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.slug) {
    return { props: {}, notFound: true };
  }

  const post = await postService.getPost(params.slug as string);

  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = mdxToHtml(post.content);

  return {
    props: {
      post,
      source,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
