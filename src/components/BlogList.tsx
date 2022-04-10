import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Post } from '../types/post';
import BlogImage from './BlogImage';
import Tags from './Tags';
import styles from './bloglist.module.scss';

interface Props {
  posts: Post[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <ul className={styles.list}>
      {posts &&
        posts.map(post => (
          <li key={post.id} data-testid="blog-list">
            <Link href={`/blog/${post.slug}`}>
              <a aria-label={post.title}>
                <BlogImage
                  src={post.image.url}
                  alt={`cover image for ${post.title}`}
                />
              </a>
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <a className={styles.title} style={{ color: 'var(--text)' }}>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <p className={styles.summary}>{post.intro}</p>
            <p className={styles.meta}>
              Published on{' '}
              <time dateTime={post.date}>
                <small>{format(parseISO(post.date), 'MMMM d, yyyy')}</small>
              </time>
            </p>
            <Tags tags={post.tags} type="blog" testId="blog-tag" />
          </li>
        ))}
    </ul>
  );
};
export default BlogList;
