import { ReactNode } from 'react';
import * as styles from './HeroList.css';

const List = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.root}>{children}</ul>;
};

const Item = ({ children }: { children: ReactNode }) => {
  return <li className={styles.item}>{children}</li>;
};

List.Item = Item;

export { List };
