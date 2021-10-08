import * as React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import { Post } from '@src/types/post';
import styles from '@src/styles/blog-header.module.scss';

interface Props {
  post: Post;
}

const BlogHeader = ({ post }: Props) => {
  const date = new Date(post.updatedAt ?? post.createdAt);
  const published = formatDistanceToNow(date);
  const publishDateFull = format(new Date(post.createdAt), 'yyyy-MM-dd');
  const publishedText = post.updatedAt ? 'Updated' : 'Published';

  return (
    <header className={styles.blogHeader}>
      <div className={styles.leftContainer}>
        <div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <h2 className={styles.blogDate}>
            <span title={publishDateFull}>
              {publishedText}
              {' '}
              {published}
              {' '}
              ago |
            </span>
            {post.readingTime && (
            <span>
              {' '}
              {post.readingTime}
            </span>
            )}
          </h2>
        </div>
      </div>
    </header>
  );
};
export default BlogHeader;
