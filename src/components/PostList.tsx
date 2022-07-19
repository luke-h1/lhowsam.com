import imageService from '@src/services/imageService';
import { Post } from '@src/types/sanity';
import classNames from 'classnames';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import readingTime from 'reading-time';
import BlogImage from './BlogImage';
import Tags from './Tags';
import styles from './postlist.module.scss';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <ul className={styles.list}>
      {posts &&
        posts.map(post => (
          <li data-testid="blog-list" key={post._id}>
            <Link href={`/blog/${post.slug.current}`} passHref>
              <a aria-label={post.title}>
                <BlogImage
                  src={imageService.urlFor(post.image.asset)}
                  alt={post.image.alt || post.title}
                />
              </a>
            </Link>
            <Link href={`/blog/${post.slug.current}`}>
              <a className={styles.title} style={{ color: 'var(--text)' }}>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <p className={styles.summary}>{post.intro}</p>
            <p className={styles.meta}>
              Published on{' '}
              <time dateTime={post.publishedAt}>
                <small>
                  {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
                </small>
              </time>
            </p>
            <p className={classNames(styles.meta, styles.time)}>
              {readingTime(post.content).text}
            </p>

            <Tags tags={post.tags} type="blog" testId="blog-tag" />
          </li>
        ))}
    </ul>
  );
};
export default PostList;
