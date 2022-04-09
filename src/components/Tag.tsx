import styles from './tag.module.scss';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <li className={styles.tag}>
      <a>{text}</a>
    </li>
  );
};
export default Tag;
