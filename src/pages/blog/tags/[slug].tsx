import Page from '@src/components/Page';
import PostItem from '@src/components/PostItem';
import siteConfig from '@src/config/site';
import postService from '@src/services/postService';
import { Post } from '@src/types/sanity';
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

  return (
    <Page title={`Posts taged with ${slug.replace('-', ' ')}`}>
      <NextSeo
        title={`Blog posts tagged with ${slug.replace('-', ' ')}`}
        canonical={`https://lhowsam.com/${router.asPath}`}
        description={`Blog posts tagged with ${slug.replace('-', ' ')} (${
          posts.length
        } posts)`}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Post tags | lhowsam.com`,
        }}
      />
      <div className={styles.postListing}>
        {posts && (
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
  const tags = await postService.getTagSlugs();
  const paths = tags.map(tag => ({ params: { slug: tag.slug.current } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  if (!slug) {
    return {
      props: [],
      notFound: true,
    };
  }

  const posts = await postService.getPostsByTag(slug);

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
