import Link from 'next/link';
import { Post } from '@src/types/post';
import styles from '@src/styles/blog.module.scss';

interface Props<T extends Post> {
  post: T;
  type: 'blog';
}

const BlogItem = ({ type, post }: Props<Post>) => {
  return (
    <Link href={`${type}/${post.slug}`} key={post.slug}>
      <a className={styles.blogItem}>
        <h2>{post.title}</h2>
        <p>{post.intro}</p>
      </a>
    </Link>
  );
};
export default BlogItem;
