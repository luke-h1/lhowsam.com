import BlogList from '@src/components/BlogList';
import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import siteConfig from '@src/config/site';
import postService from '@src/services/postService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Post } from 'studio/types/schema';

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
      />

      <BlogList posts={posts} />
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
