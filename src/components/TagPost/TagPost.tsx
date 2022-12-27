import { Post } from '@frontend/types/sanity';
import classNames from 'classnames';
import Heading from '../Heading/Heading';
import PostListing from '../PostListing/PostListing';
import styles from './TagPost.module.scss';

interface Props {
  posts: Post[];
  tag: string;
}

const TagPost = ({ posts, tag }: Props) => {
  return (
    <main className={styles.wrapper} id="main">
      <Heading as="h1" variant="primary">
        {tag}
      </Heading>
      <section className={styles.wrapper}>
        <div
          className={classNames(
            styles.postsWrapper,
            styles.postsWrapperPrimary,
          )}
        >
          <PostListing posts={posts} />
        </div>
      </section>
    </main>
  );
};
export default TagPost;
