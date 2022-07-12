import { ReactNode } from 'react';
import styles from './Grid.module.scss';

interface Props {
  children: ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
