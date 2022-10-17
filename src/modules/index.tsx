import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Home"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Home"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Home | lhowsam.com`,
        }}
      />
      <Page title="Home" showHero>
        <h2 style={{ marginBottom: '2.5rem' }} className="title">
          Recent posts:
        </h2>
        {posts && posts.map(post => <PostItem key={post._id} post={post} />)}
      </Page>
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postService.getRecentPosts();

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
