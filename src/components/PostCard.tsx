import { Post } from '@src/types/sanity';
import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import readingTime from 'reading-time';
import styles from './PostCard.module.scss';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <a className={styles.itemPost}>
        <div className={styles.itemHeader}>
          <h3>{post.title}</h3>
          <div className={styles.details}>
            <span>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</span>
            &bull;
            <span>{readingTime(post.content).text}</span>
          </div>
        </div>
        <p>{post.intro}</p>
      </a>
    </Link>
  );
};

export default PostCard;
