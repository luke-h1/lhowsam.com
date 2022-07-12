import Page from '@src/components/Page/Page';
import PageHeader from '@src/components/PageHeader/PageHeader';
import PostList from '@src/components/PostList/PostList';
import siteConfig from '@src/config/site';
import postService from '@src/services/postService';
import { Post } from '@src/types/sanity';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styles from '../index.module.scss';

const FormattedSlug = ({ slug }: { slug: string }) => (
  <span style={{ textTransform: 'capitalize' }}>{slug.replace('-', ' ')}</span>
);

interface Props {
  posts: Post[];
}

const BlogTagPage = ({ posts }: Props) => {
  const router = useRouter();

  const slug = router.query.slug as string;

  return (
    <Page>
      <PageHeader
        title={<FormattedSlug slug={slug} />}
        description={`Posts tagged with ${slug.replace('-', ' ')}`}
      >
        <div className={styles.posts}>
          <div className={styles.main}>
            <PostList posts={posts} />
          </div>
        </div>
      </PageHeader>
    </Page>
  );
};
export default BlogTagPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
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
