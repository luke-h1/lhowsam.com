import styles from './tags.module.scss';

interface Props {
  testId?: string;
  tags: string[];
}

const Tags = ({ tags, testId }: Props) => {
  if (!tags.length) return null;

  return (
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li key={tag} data-testid={testId}>
          <a style={{ cursor: 'pointer' }}>{`#${tag}`}</a>
        </li>
      ))}
    </ul>
  );
};
export default Tags;
