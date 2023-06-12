import BlogImage from '@frontend/components/BlogImage/BlogImage';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Tags from '@frontend/components/Tags/Tags';
import Button from '@frontend/components/form/Button/Button';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import cn from 'classnames';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import s from './post.module.scss';

interface Props {
  post: Post;
  compiledSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const PostPage: NextPage<Props> = ({ post, compiledSource }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

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
              url: imageService.urlFor(post.image.asset),
              alt: post.title,
              height: 1200,
              width: 630,
            },
          ],
          url: `https://lhowsam.com${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
          article: {
            authors: ['Luke Howsam'],
            publishedTime: post.publishedAt,
            tags: post.tags.map(tag => tag.title),
          },
        }}
      />
      <Page>
        {post.image && (
          <BlogImage
            src={imageService.urlFor(post.image.asset)}
            alt={post.title}
            className={cn(
              s.image,
              loading ? s.ImageLoading : s.ImageLoaded,
              s.ImageTransition,
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        )}
        <PageHeader title={post.title} compact>
          <p className={s.meta}>
            Published on{' '}
            <FormattedDate testId="time">{post.publishedAt}</FormattedDate>
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

export const getStaticProps = async ({
  params,
}: {
  params?: { slug: string };
}) => {
  const post = await postService.getPost(params?.slug as string);

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
