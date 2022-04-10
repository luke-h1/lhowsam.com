import Link from 'next/link';
import slugify from 'slugify';
import styles from './tags.module.scss';

interface Props {
  tags: string[];
  testId?: string;
  type: 'projects' | 'blog';
  enabled?: boolean;
}

const Tags = ({ tags, testId, type, enabled = true }: Props) => {
  if (!tags.length) return null;

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag} data-testid={testId}>
          {type === 'blog' && enabled ? (
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
