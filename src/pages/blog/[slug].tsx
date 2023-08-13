import BlogImage from '@frontend/components/BlogImage/BlogImage';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Tags from '@frontend/components/Tags/Tags';
import Button from '@frontend/components/form/Button/Button';
import { PostQuery } from '@frontend/graphql/generated';
import postService from '@frontend/services/postService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import s from './post.module.scss';

interface Props {
  post: NonNullable<PostQuery['post']>;
  compiledSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const PostPage: NextPage<Props> = ({ post, compiledSource }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={post.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={post.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: post?.image?.url as string,
              alt: post.title,
              height: 1200,
              width: 630,
            },
          ],
          url: `https://lhowsam.com${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
          article: {
            authors: ['Luke Howsam'],
            publishedTime: post.date,
            tags: post.tags.map(tag => tag.title),
          },
        }}
      />
      <Page>
        {post.image && (
          <BlogImage
            src={post.image.url}
            alt={post.title}
            className={s.image}
          />
        )}
        <PageHeader title={post.title} compact>
          <p className={s.meta}>
            Published on{' '}
            <FormattedDate testId="time">{post.date}</FormattedDate>
          </p>
        </PageHeader>
        <article className={s.article} data-testid="content">
          <ContentRenderer compiledSource={compiledSource.compiledSource} />
        </article>
        <Tags tags={post.tags} />
        <div className={s.buttons}>
          <Button type="button" href="/blog">
            Back to blog
          </Button>
        </div>
      </Page>
    </>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { slug } = params as { slug: string };

  const { post } = await postService.getPost(slug as string);

  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }
  const { compiledSource } = await mdxToHtml(post.content);

  return {
    props: {
      post,
      compiledSource,
    },
  };
};
