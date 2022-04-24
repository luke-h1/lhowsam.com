/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-duplicates */
import BlogImage from '@src/components/BlogImage';
import components from '@src/components/Mdx';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import postService, { Post } from '@src/services/postService';
import { mdxToHtml } from '@src/utils/mdToHtml';
import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import styles from './blog-slug.module.scss';

interface Props {
  post: Post;
  source: string;
}

const BlogSlugPage = ({ post, source }: Props) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);

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
        <Component components={components} />
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
  const source = await mdxToHtml(post.content);

  return {
    props: {
      post,
      source,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
