import { Post, Tag as TagType } from '@frontend/types/sanity';
import classNames from 'classnames';
import Heading from '../Heading/Heading';
import PostListing from '../PostListing/PostListing';
import styles from './Tag.module.scss';

interface Props {
  posts: Post[];
  tag: TagType;
}

const Tag = ({ posts, tag }: Props) => {
  return (
    <main className={styles.wrapper} id="main">
      <Heading as="h1" variant="primary">
        {tag.title}
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
export default Tag;
