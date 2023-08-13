import { PostsQuery } from '@frontend/graphql/generated';
import Link from 'next/link';
import BlogImage from '../BlogImage/BlogImage';
import FormattedDate from '../FormattedDate';
import s from './PostList.module.scss';

interface Props {
  posts: PostsQuery['posts'];
}

const PostList = ({ posts }: Props) => {
  return (
    <ul className={s.list}>
      {posts.length === 0 && <p className={s.noResults}>No posts found</p>}
      {posts &&
        posts.map(post => (
          <li key={post.id}>
            {post.image && (
              <Link href={`/blog/${post.slug}`}>
                <BlogImage src={post.image.url} alt={post.title} />
              </Link>
            )}
            <Link
              href={`/blog/${post.slug}`}
              className={s.title}
              data-testid="post-title"
            >
              {post.title}
            </Link>
            <p className={s.summary} data-testid="summary">
              {post.intro}
            </p>
            <p className={s.meta}>
              Published on <FormattedDate>{post.date}</FormattedDate>
            </p>
          </li>
        ))}
    </ul>
  );
};
export default PostList;
