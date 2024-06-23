import imageService from '@frontend/services/imageService';
import * as tagStyles from '@frontend/styles/tag.css';
import * as utilStyles from '@frontend/styles/util.css';
import { Post } from '@frontend/types/sanity';
import clsx from 'clsx';
import Image from 'next/image';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import * as styles from './PostItem.css';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Image
          src={imageService.urlFor(post.image.asset)}
          width={40}
          height={40}
          alt={post.title}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.stack}>
          <div>
            <Heading as="h3" className={clsx(styles.title, styles.inline)}>
              {post.title}
            </Heading>
          </div>
          <Text className={clsx(styles.url)}>test</Text>
        </div>
        <div className={clsx(tagStyles.tags, utilStyles.flexRow)}>
          {post.tags && post.tags.map(tag => <p key={tag._id}>{tag.title}</p>)}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
