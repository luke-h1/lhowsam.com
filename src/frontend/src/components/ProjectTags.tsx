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
          <span style={{ cursor: 'pointer' }}>{`#${tag}`}</span>
        </li>
      ))}
    </ul>
  );
};
export default Tags;
