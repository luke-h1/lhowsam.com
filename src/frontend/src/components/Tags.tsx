// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from 'next/link';
import { Tag } from 'studio/types/schema';
import styles from './tags.module.scss';

interface Props {
  testId?: string;
  type: 'projects' | 'blog';
  tags: Tag[];
}

const Tags = ({ tags, testId, type }: Props) => {
  if (!tags.length) {
    return null;
  }

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag._id} data-testid={testId}>
          {type === 'blog' ? (
            <Link
              href={`/blog/tags/${tag.slug.current}`}
            >{`#${tag.title}`}</Link>
          ) : (
            <a>#{tag.title}</a>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Tags;
