import Page from '@frontend/components/Page/Page';
import Share from '@frontend/components/Share';
import Tags from '@frontend/components/Tags/Tags';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import mdxToHtml from '@frontend/utils/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import styles from './slug.module.scss';

interface Props {
  post: Post;
  source: {
    compiledSource: string;
  };
}

const BlogPostPage = ({ post, source }: Props) => {
  const router = useRouter();

  return (
    <Page title={post.title}>
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
      <div className={styles.headerPost}>
        <div className={styles.container}>
          <Tags tags={post.tags} />
        </div>
        <div className={styles.thumbnail}>
          <img
            src={imageService.urlFor(post.image.asset)}
            alt={post.image.alt ?? post.title}
            loading="eager"
            width="1170"
          />
          <img
            src={imageService.urlFor(post.image.asset)}
            alt={post.image.alt ?? post.title}
            loading="eager"
            width="1170"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.postLayout}>
          <div className={styles.socialShare}>
            <span>Share</span>
            <Share
              title={post.title}
              link={`${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`}
            />
          </div>
          <article className={styles.article}>
            <div>
              <MDXRemote compiledSource={source.compiledSource} />
            </div>
          </article>
        </div>
      </div>
    </Page>
  );
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await postService.getPost(params?.slug as string);

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
