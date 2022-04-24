import Page from '@src/components/Page';
import PageHeader from '@src/components/PageHeader';
import siteConfig from '@src/config/site';
import postService, { Post } from '@src/services/postService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
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
      <NextSeo
        title={`Posts tagged with ${router.query.slug}`}
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Home"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `posts tagged by ${router.query.slug} | lhowsam.com`,
        }}
      />
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
