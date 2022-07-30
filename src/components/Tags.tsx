import { Tag } from '@src/types/sanity';
import styles from './Tags.module.scss';

interface Props {
  tags: Tag[];
}

const Tags = ({ tags }: Props) => {
  return (
    <div className={styles.tags}>
      {tags &&
        tags.map(tag => (
          <p className={styles.tag} key={tag._id}>
            {tag.title}
          </p>
        ))}
    </div>
  );
};

export default Tags;
