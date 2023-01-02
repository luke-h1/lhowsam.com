import Page from '@frontend/components/Page';
import TagPost from '@frontend/components/TagPost';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  posts: Post[];
}

const TagPage = ({ posts }: Props) => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const formattedSlug = slug.replace('-', ' ');

  return (
    <Page>
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
      <TagPost posts={posts} tag={formattedSlug} />
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = await postService.getPostsByTag(params?.slug as string);

  if (!posts.length) {
    return {
      props: {
        posts,
      },
    };
  }

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
export default TagPage;
