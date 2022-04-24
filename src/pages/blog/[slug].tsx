/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-duplicates */
import mdxPrism from '@mapbox/rehype-prism';
import BlogImage from '@src/components/BlogImage';
import components from '@src/components/Mdx';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import postService, { Post } from '@src/services/postService';
import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import CodeTitle from 'rehype-code-titles';
import styles from './blog-slug.module.scss';

interface Props {
  post: Post;
  source: { compiledSource: string };
}

const BlogSlugPage = ({ post, source }: Props) => {
  const router = useRouter();

  return (
    <Page>
      <NextSeo
        title={post.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={post.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: post.image.url,
              alt: post.title,
              height: 1200,
              width: 630,
            },
          ],
          url: `https://lhowsam.com${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
        }}
      />
      <BlogImage
        src={post.image.url}
        alt={post.title}
        className={styles.image}
      />
      <PageHeader title={post.title} compact>
        <p className={styles.meta}>
          Published on{' '}
          <time dateTime={post.date}>
            <small style={{ marginRight: '6px' }}>
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </small>
          </time>{' '}
        </p>
        <Tags tags={post.tags} type="blog" />
      </PageHeader>
      <article className={styles.article}>
        <article>
          <MDXRemote
            compiledSource={source.compiledSource}
            components={components}
          />
        </article>
      </article>
    </Page>
  );
};
export default BlogSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await postService.getPostsBySlug();
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

  const post = await postService.getPost(params.slug as string);
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
    revalidate: siteConfig.defaultRevalidate,
  };
};
