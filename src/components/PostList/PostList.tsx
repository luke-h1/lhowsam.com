import imageService from '@frontend/services/imageService';
import { Post } from '@frontend/types/sanity';
import Link from 'next/link';
import BlogImage from '../BlogImage/BlogImage';
import FormattedDate from '../FormattedDate';
import s from './PostList.module.scss';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <ul className={s.list}>
      {posts.length === 0 && <p className={s.noResults}>No posts found</p>}
      {posts &&
        posts.map(post => (
          <li key={post._id}>
            {post.image && (
              <Link href={`/blog/${post.slug.current}`}>
                <BlogImage
                  src={imageService.urlFor(post.image.asset)}
                  alt={post.title}
                />
              </Link>
            )}
            <Link
              href={`/blog/${post.slug.current}`}
              className={s.title}
              data-testid="post-title"
            >
              {post.title}
            </Link>
            <p className={s.summary} data-testid="summary">
              {post.intro}
            </p>
            <p className={s.meta}>
              Published on <FormattedDate>{post.publishedAt}</FormattedDate>
            </p>
          </li>
        ))}
    </ul>
  );
};
export default PostList;
