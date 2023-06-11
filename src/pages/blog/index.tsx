/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-param-reassign */

import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import PostList from '@frontend/components/PostList/PostList';
import Input from '@frontend/components/form/Input/Input';
import siteConfig from '@frontend/config/site';
import { search } from '@frontend/services/googleAnalyticsService';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import debounce from 'lodash/debounce';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { ChangeEvent, Fragment, useCallback, useState } from 'react';
import { Search } from 'react-feather';
import s from './index.module.scss';

interface Props {
  posts: Post[];
}

const BlogIndexPage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();
  const [currentSearch, setCurrentSearch] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const trackSearch = useCallback(
    debounce((value: string) => search(value), 500),
    [],
  );

  const filteredPosts = posts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .filter(post => {
      const searchString = `${post.title.toLowerCase()} ${post.content.toLowerCase()}`;

      return searchString.includes(currentSearch.toLowerCase());
    });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    if (searchValue !== '') {
      trackSearch(searchValue);
    }

    setCurrentSearch(searchValue);
  };

  return (
    <>
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
      <Page>
        <PageHeader
          title="Blog"
          description="I write about testing, frontend development and React"
        >
          <div className={s.inputWrapper}>
            <Input
              className={s.input}
              value={currentSearch}
              onChange={handleInputChange}
              placeholder="Search posts…"
              type="search"
            />
            <Search className={s.inputIcon} />
          </div>
        </PageHeader>
        <PostList posts={filteredPosts} />
      </Page>
    </>
  );
};

export default BlogIndexPage;

export const getStaticProps = async () => {
  const posts = await postService.getAllPosts();

  // const allPosts = posts.sort((a, b) => {
  //   if (a.publishedAt < b.publishedAt) {
  //     return 1;
  //   }
  //   if (a.publishedAt > b.publishedAt) {
  //     return -1;
  //   }
  //   return 0;
  // });

  // const postsByYear: Record<string, Post[]> = {};

  // allPosts.forEach(post => {
  //   const year = new Date(post.publishedAt).getFullYear();
  //   if (!postsByYear[year]) {
  //     postsByYear[year] = [];
  //   }
  //   postsByYear[year].push(post);
  // });

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
