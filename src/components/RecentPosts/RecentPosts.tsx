import { Post } from '@frontend/types/sanity';
import RecentPostItem from './RecentPostItem/RecentPostItem';
import styles from './RecentPosts.module.scss';

interface Props {
  posts: Post[];
}

const RecentPosts = ({ posts }: Props) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Recent Posts</h2>
      {posts &&
        posts.map(post => <RecentPostItem key={post._id} post={post} />)}
    </div>
  );
};

export default RecentPosts;
