import { Tag } from '@src/types/post';
import Link from 'next/link';
import styles from './tags.module.scss';

interface Props {
  tags: Tag[];
  testId?: string;
  type: 'projects' | 'blog';
}

const Tags = ({ tags, testId, type }: Props) => {
  if (!tags.length) return null;

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag.id} data-testid={testId}>
          {type === 'blog' && (
            <Link href={`/blog/tags/${tag.slug}`}>{`#${tag.title}`}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Tags;
