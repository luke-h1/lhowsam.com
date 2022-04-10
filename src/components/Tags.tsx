import Link from 'next/link';
import slugify from 'slugify';
import styles from './tags.module.scss';

interface Props {
  tags: string[];
  testId?: string;
  type: 'projects' | 'blog';
}

const Tags = ({ tags, testId, type }: Props) => {
  if (!tags.length) return null;

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag} data-testid={testId}>
          {type === 'blog' ? (
            <Link href={`/blog/tags/${slugify(tag, { lower: true })}`}>
              {`#${tag}`}
            </Link>
          ) : (
            <a style={{ cursor: 'pointer' }}>{`#${tag}`}</a>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Tags;
