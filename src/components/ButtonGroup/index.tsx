import clsx from 'clsx';
import { ReactNode } from 'react';
import * as styles from './ButtonGroup.css';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ButtonGroup({ children, className }: Props) {
  return <div className={clsx(styles.group, className)}>{children}</div>;
}
