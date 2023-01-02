import { Tag } from '@frontend/types/sanity';
import Link from 'next/link';
import styles from './TagCard.module.scss';

interface Props {
  tag: Tag;
}

const TagCard = ({ tag }: Props) => {
  return (
    <Link href={`/blog/tags/${tag.slug.current}`} className={styles.tag}>
      {tag.title}
    </Link>
  );
};
export default TagCard;
