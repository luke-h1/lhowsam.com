// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from 'next/link';
import styles from './tags.module.scss';

interface Props {
  testId?: string;
  type: 'projects' | 'blog';
  tags: {
    id: string;
    title: string;
    slug?: string;
  }[];
}

const Tags = ({ tags, testId, type }: Props) => {
  if (!tags.length || !Array.isArray(tags)) return null;

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag.id} data-testid={testId}>
          {type === 'blog' ? (
            <Link href={`/blog/tags/${tag.slug}`}>{`#${tag.title}`}</Link>
          ) : (
            <a>{`#${tag.title}`}</a>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Tags;
