import PostListing from '@frontend/components/PostListing';
import imageService from '@frontend/services/imageService';
import { Post, Project, Reference, Tag } from '@frontend/types/sanity';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Heading from '../Heading';
import styles from './ContentRenderer.module.scss';

interface Props {
  children: ReactNode;
  data: Post | Project;
  recommendedPosts?: {
    posts: Post[];
    tags?: Tag[];
  };
}

const ContentRenderer = ({ children, recommendedPosts, data }: Props) => {
  return data._type === 'post' ? (
    <article className={styles.wrapper}>
      <header className={styles.header} id="main">
        <Heading as="h1" variant="secondary" className={styles.heading}>
          {data.title}
        </Heading>
        <div className={styles.thumbnail}>
          <img
            src={imageService.urlFor(data?.image?.asset as Reference)}
            alt=""
            loading="eager"
            width="1170"
          />
          <img
            src={imageService.urlFor(data?.image?.asset as Reference)}
            alt=""
            loading="eager"
            width="1170"
          />
        </div>
      </header>
      <section className={classNames(styles.content, 'content')}>
        {children}
        <div className={styles.recommended}>
          <h2 className={styles.recommendedHeading}>Other posts</h2>
          <div className={styles.recommendedPosts}>
            <PostListing
              posts={recommendedPosts?.posts}
              variant="recommended"
            />
          </div>
        </div>
      </section>
    </article>
  ) : (
    <article className={styles.wrapper}>
      <header className={styles.header} id="main">
        <Heading as="h1" variant="secondary" className={styles.heading}>
          {data.title}
        </Heading>
      </header>
      <section className={classNames(styles.content, 'content')}>
        {children}
      </section>
    </article>
  );
};
export default ContentRenderer;
