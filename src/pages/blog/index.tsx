import Page from '@src/components/Page';
import siteConfig from '@src/config/site';
import postService from '@src/services/postService';
import { Post } from '@src/types/sanity';
import * as gtag from '@src/utils/gtag';
import debounce from 'lodash/debounce';
import { GetStaticProps } from 'next';
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
      <div className={styles.search}>
        <input
          aria-label="Search blog articles"
          placeholder="Search articles"
          onChange={handleInputChange}
          type="text"
        />
      </div>
    </Page>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postService.getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
