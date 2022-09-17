import { Post } from '@src/types/sanity';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import styles from './PostItem.module.scss';
import Tags from './Tags';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug.current}`} passHref>
      <a className={styles.post} data-testid="post-title">
        <div className={styles.postDetails}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDescription}>{post.intro}</p>
          <p className={styles.meta}>
            <time dateTime={post.publishedAt}>
              <small>
                {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
              </small>
            </time>
          </p>{' '}
          <Tags tags={post.tags} key={post._id} />
        </div>
      </a>
    </Link>
  );
};

export default PostItem;
