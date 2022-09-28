import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import * as gtag from '@frontend/utils/gtag';
import debounce from 'lodash/debounce';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useState } from 'react';
import styles from './index.module.scss';

interface Props {
  posts: Post[];
}

const BlogPage = ({ posts }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const trackSearch = useCallback(
    debounce((value: string) => gtag.search(value), 500),
    [],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 0) {
      trackSearch(e.target.value);
    }
    return setSearch(e.target.value);
  };

  const filteredPosts = posts.filter(post => {
    const searchString = `${post.title.toLowerCase()} ${post.intro.toLowerCase()}`;
    return searchString.includes(search.toLowerCase());
  });

  return (
    <Page showHero={false} title="Blog">
      <NextSeo
        title="Blog"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="My blog posts"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Blog | lhowsam.com`,
        }}
      />
      <div className={styles.search}>
        <input
          aria-label="Search blog articles"
          placeholder="Search articles"
          onChange={handleInputChange}
          type="text"
        />
      </div>
      <div className={styles.postListing}>
        {filteredPosts && (
          <ul>
            {filteredPosts.map(post => (
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

export default BlogPage;

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await postService.getAllPosts();

  if (!posts.length) {
    return {
      props: {
        posts: [],
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
