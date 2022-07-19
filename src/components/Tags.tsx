// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Tag } from '@src/types/sanity';
import Link from 'next/link';
import styles from './Tags.module.scss';

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
              data-testid={`${tag.slug.current}-tag`}
              href={`/blog/tags/${tag.slug.current}`}
            >{`#${tag.title}`}</Link>
          ) : (
            <span>{`#${tag.title}`}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Tags;
