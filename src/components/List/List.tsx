import { ReactNode } from 'react';
import * as styles from './List.css';

interface Props {
  children: ReactNode;
}

const List = ({ children }: Props) => {
  return <ul className={styles.root}>{children}</ul>;
};

const Item = ({ children }: Props) => {
  return <li className={styles.item}>{children}</li>;
};

List.Item = Item;

export default List;
