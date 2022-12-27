import imageService from '@frontend/services/imageService';
import { Heading } from '@frontend/types/mdx';
import { Post } from '@frontend/types/sanity';
import classNames from 'classnames';
import Link from 'next/link';
import FormattedDate from '../FormattedDate/FormattedDate';
import Tags from '../Tags/Tags';
import styles from './PostThumbnail.module.scss';

interface Props {
  post: Post;
  as?: Heading;
  variant?: 'listing' | 'recommended';
}

const PostThumbnail = ({
  post,
  as: Element = 'h2',
  variant = 'listing',
}: Props) => {
  return (
    <article
      data-testid="post-thumbnail"
      className={classNames(styles.wrapper, {
        [styles.wrapperRecommended]: variant === 'recommended',
      })}
    >
      <Link
        href={`/blog/${post.slug.current}`}
        className={styles.link}
        data-testid="post-link"
      >
        {variant === 'listing' && (
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={imageService.urlFor(post.image.asset)}
              alt={post.image.alt ?? post.title}
            />
          </div>
        )}
        <div className={styles.content}>
          <span className={styles.info}>
            <FormattedDate>{post.publishedAt}</FormattedDate>
            <Tags tags={post.tags} key={post._id} />
          </span>
          <Element
            className={styles.heading}
            data-testid="recommended-post-title"
          >
            {post.title}
          </Element>
        </div>
      </Link>
    </article>
  );
};
export default PostThumbnail;
