/* eslint-disable no-param-reassign */
/* eslint-disable import/no-duplicates */
import BlogImage from '@src/components/BlogImage';
import components from '@src/components/Mdx';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import imageService from '@src/services/imageService';
import postService from '@src/services/postService';
import { format, parseISO } from 'date-fns';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Headings from 'rehype-autolink-headings';
import CodeTitle from 'rehype-code-titles';
import { Post } from 'studio/types/schema';
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
              url: imageService.urlFor(post.image.asset),
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
        src={imageService.urlFor(post.image.asset)}
        alt={post.title}
        className={styles.image}
      />
      <PageHeader title={post.title} compact>
        <p className={styles.meta}>
          Published on{' '}
          <time dateTime={post.publishedAt}>
            <small style={{ marginRight: '6px' }}>
              {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
            </small>
          </time>{' '}
        </p>
        <Tags tags={post.tags} type="blog" />
      </PageHeader>
      <article className={styles.article}>
        <MDXRemote
          compiledSource={source.compiledSource}
          components={components}
        />
      </article>
    </Page>
  );
};
export default BlogSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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
      rehypePlugins: [mdxPrism, CodeTitle, Headings],
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
