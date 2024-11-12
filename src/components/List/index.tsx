import { CSSProperties, ReactNode } from 'react';
import * as styles from './List.css';

interface Props {
  children: ReactNode;
  testId?: string;
  style?: CSSProperties;
}

export function Container({ children, style, testId }: Props) {
  return (
    <ul className={styles.list} data-testid={testId} style={style}>
      {children}
    </ul>
  );
}

interface ListItemProps {
  id?: string;
  hidden?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}

export function Item({ children, hidden, id, style }: ListItemProps) {
  return (
    <li className={styles.item} id={id} hidden={hidden} style={style}>
      {children}
    </li>
  );
}
