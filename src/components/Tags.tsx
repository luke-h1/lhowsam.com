import Link from 'next/link';
import slugify from 'slugify';
import styles from './tags.module.scss';

interface Props {
  tags: string[];
}

const Tags = ({ tags }: Props) => {
  if (!tags.length) return null;

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag}>
          <Link href={`/blog/tags/${slugify(tag, { lower: true })}`}>
            {`#${tag}`}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Tags;
