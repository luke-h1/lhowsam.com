import imageService from '@frontend/services/imageService';
import { Post } from '@frontend/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostItem.module.scss';
import Tags from './Tags';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      passHref
      className={styles.post}
      data-testid="post-title"
      legacyBehavior
    >
      <div className={styles.dateThumb}>
        <div className={styles.date}>
          <span className={styles.day}>
            {post.publishedAt.split('T')[0].split('-')[2]}
          </span>
          <span className={styles.month}>
            {post.publishedAt.split('T')[0].split('-')[1]}
          </span>
          <span className={styles.year}>
            {post.publishedAt.split('T')[0].split('-')[0]}
          </span>
        </div>
        <div className={styles.thumb}>
          <Image
            src={imageService.urlFor(post.image.asset)}
            alt={post.image.alt ?? post.title}
            blurDataURL={imageService.urlFor(post.image.asset)}
            placeholder="blur"
            quality={100}
            width={170}
            height={170}
            loading="eager"
            priority
          />
        </div>
      </div>
      <div className={styles.postDetails}>
        <Tags tags={post.tags} testId="post-tags" />
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postDescription} data-testid="post-intro">
          {post.intro}
        </p>
      </div>
    </Link>
  );
};

export default PostItem;
