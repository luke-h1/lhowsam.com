import clsx from 'clsx';
import { ReactNode } from 'react';
import * as styles from './List.css';

const List = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <ul className={clsx(styles.root, className)}>{children}</ul>;
};

const Item = ({ children }: { children: ReactNode }) => {
  return <li className={styles.item}>{children}</li>;
};

List.Item = Item;

export { List };
