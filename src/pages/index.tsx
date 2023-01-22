import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  posts: Post[];
}

const Indexpage = ({ posts }: Props) => {
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
      yo
    </>
  );
};
export default Indexpage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postService.getRecentPosts();

  if (!posts.length) {
    return {
      props: {
        posts: [],
        tags: [],
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
