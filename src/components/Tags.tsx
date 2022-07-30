import { Tag } from '@src/types/sanity';
import styles from './Tags.module.scss';

interface Props {
  tags: Tag[];
  // type: 'project' | 'post';
}

const Tags = ({ tags }: Props) => {
  return (
    <div className={styles.tags}>
      {tags &&
        tags.map(tag => (
          <p key={tag._id} className={styles.tag}>
            {tag.title}
          </p>
        ))}
    </div>
  );
};

export default Tags;
