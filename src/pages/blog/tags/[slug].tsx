import Page from '@frontend/components/Page/Page';
import PostItem from '@frontend/components/PostItem/PostItem';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import styles from '../index.module.scss';

interface Props {
  posts: Post[];
}

const TagPage = ({ posts }: Props) => {
  const router = useRouter();

  const slug = router.query.slug as string;

  const formattedSlug = slug.replace('-', ' ');

  return (
    <Page title={`Posts taged with ${formattedSlug}`}>
      <NextSeo
        title={`Blog posts tagged with ${formattedSlug}`}
        canonical={`https://lhowsam.com/${router.asPath}`}
        description={`Blog posts tagged with ${formattedSlug} (${posts.length} posts)`}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Post tags | lhowsam.com`,
        }}
      />
      <div className={styles.postListing}>
        {!posts.length ? (
          <div style={{ marginBottom: '6rem' }}>
            <h2>{`No posts tagged with '${formattedSlug}'`}</h2>
          </div>
        ) : (
          <ul>
            {posts.map(post => (
              <li key={post._id}>
                <PostItem post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Page>
  );
};

export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = await postService.getPostsByTag(params?.slug as string);

  if (!posts.length) {
    return { props: { posts: [] } };
  }

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
