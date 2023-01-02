import Tags from '@frontend/components/Tags';
import { Post } from '@frontend/types/sanity';
import Link from 'next/link';
import styles from './RecentPostItem.module.scss';

interface Props {
  post: Post;
}

const RecentPostItem = ({ post }: Props) => {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      passHref
      className={styles.post}
      data-testid="post-title"
    >
      <div className={styles.dateThumb}>
        <div className={styles.date}>
          <span className={styles.day}>
            {post.publishedAt.split('T')[0].split('-')[2]}
          </span>
          <span className={styles.month}>
            {post.publishedAt.split('T')[0].split('-')[1]}
          </span>
          <span className={styles.year}>
            {post.publishedAt.split('T')[0].split('-')[0]}
          </span>
        </div>
      </div>
      <div className={styles.postDetails}>
        <Tags tags={post.tags} testId="post-tags" />
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postDescription} data-testid="post-intro">
          {post.intro}
        </p>
      </div>
    </Link>
  );
};

export default RecentPostItem;
