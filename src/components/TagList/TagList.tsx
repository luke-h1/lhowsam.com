import { Tag } from '@frontend/types/sanity';
import TagCard from '../TagCard/TagCard';
import styles from './TagList.module.scss';

interface Props {
  tags: Tag[];
}

const TagsList = ({ tags }: Props) => {
  return (
    <div className={styles.tags}>
      {tags && tags.map(tag => <TagCard tag={tag} key={tag._id} />)}
    </div>
  );
};
export default TagsList;
