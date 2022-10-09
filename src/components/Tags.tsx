import { Tag } from '@frontend/types/sanity';
import styles from './Tags.module.scss';

interface Props {
  tags: Tag[];
  testId?: string;
}

const Tags = ({ tags, testId }: Props) => {
  return (
    <div className={styles.tags} data-testid={testId}>
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
