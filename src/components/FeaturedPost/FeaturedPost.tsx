import imageService from '@frontend/services/imageService';
import { Post } from '@frontend/types/sanity';
import Link from 'next/link';
import FormattedDate from '../FormattedDate/FormattedDate';
import Tags from '../Tags/Tags';
import styles from './FeaturedPost.module.scss';

interface Props {
  post: Post;
  testId?: string;
}

const FeaturedPost = ({ post, testId }: Props) => {
  return (
    <article className={styles.wrapper} data-testid={testId}>
      <Link
        href={`/blog/${post.slug.current}`}
        className={styles.link}
        data-testid="post-link"
      >
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={imageService.urlFor(post.image.asset)}
            alt=""
          />
        </div>
        <div className={styles.content}>
          <span className={styles.info}>
            <FormattedDate>{post.publishedAt}</FormattedDate>
            {post.tags && <Tags tags={post.tags} key={post._id} />}
          </span>{' '}
          <h2 className={styles.heading} data-testid="featured-post-title">
            {post.title}
          </h2>
          <p className={styles.intro} data-testid="featured-post-title">
            {post.intro}
          </p>
        </div>
      </Link>
    </article>
  );
};
export default FeaturedPost;
