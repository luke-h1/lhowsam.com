import Page from '@frontend/components/Page/Page';
import ContentRenderer from '@frontend/components/mdx/ContentRenderer';
import customMdxComponents from '@frontend/components/mdx/MdxComponents';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import mdxToHtml, { MdxResult } from '@frontend/utils/mdxToHtml';
import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import readingTime from 'reading-time';

interface Props {
  transformedMdx: MdxResult;
  post: Post;
  recommendedPosts: Post[];
}

const BlogSlugPage = ({ post, transformedMdx, recommendedPosts }: Props) => {
  const router = useRouter();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

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
          article: {
            authors: ['Luke Howsam'],
            publishedTime: post.publishedAt,
            tags: post.tags.map(tag => tag.title),
          },
        }}
      />
      <ArticleJsonLd
        url={`https://lhowsam.com${router.asPath}`}
        authorName="Luke Howsam"
        dateModified={post.publishedAt}
        datePublished={post.publishedAt}
        description={post.intro}
        images={[imageService.urlFor(post.image.asset)]}
        publisherLogo="https://lhowsam.com/static/images/logo.png"
        publisherName="lhowsam.com"
        title={post.title}
        type="BlogPosting"
      />
      <main>
        <MDXProvider
          components={{
            customMdxComponents,
          }}
        >
          <ContentRenderer
            type="post"
            recommendedPosts={{
              posts: recommendedPosts,
              tags: post.tags,
            }}
            frontMatter={{
              image: post.image,
              intro: post.intro,
              published: true,
              readingTime: readingTime(post.content).text,
              title: post.title,
              publishedAt: post.publishedAt,
            }}
          >
            <MDXRemote {...transformedMdx.compiledSource} key={post._id} />
          </ContentRenderer>
        </MDXProvider>
      </main>
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await postService.getPost(params?.slug as string);
  const recommendedPosts = await postService.getRecommendedPosts(post._id);

  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }
  const transformedMdx = await mdxToHtml(post.content);

  if (!recommendedPosts) {
    return {
      props: {
        post,
        recommendedPosts: [],
        transformedMdx,
      },
    };
  }

  return {
    props: {
      post,
      recommendedPosts,
      transformedMdx,
    },
  };
};
