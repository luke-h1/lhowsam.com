import imageService from '@src/services/imageService';
import { Post } from '@src/types/sanity';
import { formatISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostItem.module.scss';
import Tags from './Tags';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <a className={styles.post}>
        <div className={styles.dateThumb}>
          <div className={styles.date}>
            <span className={styles.day}>
              {post.publishedAt.split('T')[0].split('-')[2]}
            </span>
            <span className={styles.month}>
              {post.publishedAt.split('T')[0].split('-')[1]}
            </span>
            <span className={styles.month}>
              {post.publishedAt.split('T')[0].split('-')[0]}
            </span>
          </div>
          <div className={styles.thumb}>
            <Image
              src={imageService.urlFor(post.image.asset)}
              alt={post.image.alt ?? post.title}
              blurDataURL={imageService.urlFor(post.image.asset)}
              layout="responsive"
              placeholder="blur"
              quality={100}
              width={170}
              height={170}
              loading="eager"
            />
          </div>
        </div>
        <div className={styles.postDetails}>
          <Tags tags={post.tags} />
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDescription}>{post.intro}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostItem;
