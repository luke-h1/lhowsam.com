import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import blogService from '@src/services/blogService';
import { Post } from '@src/types/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import BlogList from '../../../components/BlogList';

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
// myString.replace(/^\w/, (c) => c.toUpperCase());

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  if (!slug) {
    return {
      props: [],
      notFound: true,
    };
  }

  const formattedSlug = slug.replace(/^\w/, c => c.toUpperCase());

  const { posts } = await blogService.getPostsByTags(formattedSlug);

  return {
    props: {
      posts,
    },
    revalidate: 30 * 60,
  };
};
