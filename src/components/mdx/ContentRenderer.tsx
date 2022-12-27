import PostListing from '@frontend/components/PostListing/PostListing';
import imageService from '@frontend/services/imageService';
import { Post, Reference, Tag } from '@frontend/types/sanity';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Heading from '../Heading/Heading';
import styles from './ContentRenderer.module.scss';
import Info, { FrontMatter } from './Info/Info';

interface Props {
  children: ReactNode;
  frontMatter: FrontMatter;
  type: 'post' | 'project';
  recommendedPosts?: {
    posts: Post[];
    tags?: Tag[];
  };
}

const ContentRenderer = ({
  children,
  recommendedPosts,
  frontMatter,
  type,
}: Props) => {
  return type === 'post' ? (
    <article className={styles.wrapper}>
      <header className={styles.header} id="main">
        <Heading as="h1" variant="secondary" className={styles.heading}>
          {frontMatter.title}
        </Heading>
        <div className={styles.thumbnail}>
          <img
            src={imageService.urlFor(frontMatter?.image?.asset as Reference)}
            alt=""
            loading="eager"
            width="1170"
          />
          <img
            src={imageService.urlFor(frontMatter?.image?.asset as Reference)}
            alt=""
            loading="eager"
            width="1170"
          />
        </div>
        <Info frontMatter={frontMatter} />
      </header>
      <section className={classNames(styles.content, 'content')}>
        {children}
        <div className={styles.recommended}>
          <h2 className={styles.recommendedHeading}>Recommended posts</h2>
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
          {frontMatter.title}
        </Heading>
      </header>
      <section className={classNames(styles.content, 'content')}>
        {children}
      </section>
    </article>
  );
};
export default ContentRenderer;
