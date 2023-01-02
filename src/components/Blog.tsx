import { Post, Tag } from '@frontend/types/sanity';
import gtagService from '@frontend/utils/gtag';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { ChangeEvent, useCallback, useState } from 'react';
import styles from './Blog.module.scss';
import FeaturedPost from './FeaturedPost';
import Heading from './Heading';
import PostListing from './PostListing';
import TagsList from './TagList';

interface Props {
  posts: Post[];
  tags: Tag[];
}

const Blog = ({ posts, tags }: Props) => {
  const firstPost = posts[0];
  const [, ...restOfPosts] = posts;
  const [search, setSearch] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const trackSearch = useCallback(
    debounce((value: string) => gtagService.search(value), 500),
    [],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 0) {
      trackSearch(e.target.value);
    }
    return setSearch(e.target.value);
  };

  const filteredPosts = restOfPosts.filter(post => {
    const searchString = `${post.title.toLowerCase()} ${post.intro.toLowerCase()}`;
    return searchString.includes(search.toLowerCase());
  });

  return (
    <main className={styles.wrapper} id="main">
      <Heading as="h1" variant="primary">
        Blog
      </Heading>
      <div className={styles.search}>
        <input
          data-testid="search"
          aria-label="Search blog articles"
          placeholder="Search articles"
          onChange={handleInputChange}
          type="text"
        />
      </div>
      <TagsList tags={tags} />
      <section className={styles.wrapper}>
        <FeaturedPost key={firstPost._id} post={firstPost} />
        <div
          className={classNames(
            styles.postsWrapper,
            styles.postsWrapperPrimary,
          )}
        >
          <PostListing posts={filteredPosts} />
        </div>
      </section>
    </main>
  );
};
export default Blog;
