import Input from '@src/components/Input/Input';
import Page from '@src/components/Page/Page';
import PageHeader from '@src/components/PageHeader/PageHeader';
import PostList from '@src/components/PostList/PostList';
import siteConfig from '@src/config/site';
import postService from '@src/services/postService';
import { Post } from '@src/types/sanity';
import * as gtag from '@src/utils/gtag';
import debounce from 'lodash/debounce';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './index.module.scss';

interface Props {
  posts: Post[];
}

const BlogIndexPage = ({ posts }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const trackSearch = useCallback(
    debounce((value: string) => gtag.search(value), 500),
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Page>
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
      <PageHeader title="Blog" />
      <div className={styles.inputWrapper}>
        <Input
          className={styles.input}
          value={search}
          onChange={handleInputChange}
          placeholder="Search posts"
          type="search"
        />
      </div>

      <PostList posts={filteredPosts} />
    </Page>
  );
};
export default BlogIndexPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postService.getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
