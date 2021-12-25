/* eslint-disable import/no-duplicates */
import Nav from '@src/components/Nav';
import Page from '@src/components/Page';
import blogService from '@src/services/blogService';
import { Post } from '@src/types/post';
import { formatDistanceToNow } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  post: Post;
  source: { compiledSource: string };
}

const BlogSlugPage = ({ post, source }: Props) => {
  return (
    <Page
      title={`${post.title} | lhowsam.com`}
      description={`Blog | ${post.intro}`}
      ogImage={post.image.url}
    >
      <div className="container">
        <header>
          <h1>{post.title}</h1>
        </header>
        <p className="blog-meta">
          <time dateTime={post.date}>
            Published {formatDistanceToNow(parseISO(post.date))} ago
          </time>
        </p>
        <article>
          <MDXRemote {...source} />
        </article>
      </div>
    </Page>
  );
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
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
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
