import { ReactNode } from 'react';
import styles from './Sparkles.module.scss';

interface Props {
  children: ReactNode;
}

const Sparkles = ({ children }: Props) => {
  return (
    <span className={styles.wrapper}>
      <strong>{children}</strong>
    </span>
  );
};
export default Sparkles;
