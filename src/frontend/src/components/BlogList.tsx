import imageService from '@src/services/imageService';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Post } from 'studio/types/schema';
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
          <li key={post._id} data-testid="blog-list">
            <Link href={`/blog/${post.slug.current}`}>
              <a aria-label={post.title}>
                <BlogImage
                  src={imageService.urlFor(post.image.asset)}
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
              <time dateTime={post.publishedAt}>
                <small>
                  {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
                </small>
              </time>
            </p>

            <Tags tags={post.tags} type="blog" testId="blog-tag" />
          </li>
        ))}
    </ul>
  );
};
export default BlogList;
