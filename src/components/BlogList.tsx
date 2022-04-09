import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import readingTime from 'reading-time';
import { Post } from '../types/post';
import BlogImage from './BlogImage';
import styles from './bloglist.module.scss';

interface Props {
  posts: Post[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <ul className={styles.list}>
      {posts &&
        posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a aria-label={post.title}>
                <BlogImage src={post.image.url} alt={post.title} />
              </a>
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <a className={styles.title}>{post.title}</a>
            </Link>
            <p className={styles.summary}>{post.intro}</p>
            <p className={styles.meta}>
              Published on{' '}
              <time dateTime={post.date}>
                {' '}
                <small>{format(parseISO(post.date), 'MMMM d, yyyy')}</small>
                &middot;
              </time>
            </p>
          </li>
        ))}
    </ul>
  );
};
export default BlogList;
