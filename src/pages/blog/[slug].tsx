import Page from '@src/components/Page';
import Share from '@src/components/Share';
import Tags from '@src/components/Tags';
import siteConfig from '@src/config/site';
import imageService from '@src/services/imageService';
import postService from '@src/services/postService';
import { Post } from '@src/types/sanity';
import mdxToHtml from '@src/utils/mdx';
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
            loading="lazy"
            width="1170"
          />
          <img
            src={imageService.urlFor(post.image.asset)}
            alt={post.image.alt ?? post.title}
            loading="lazy"
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
  const source = await mdxToHtml(post.content);

  return {
    props: {
      post,
      source,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
