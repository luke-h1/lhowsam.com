import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Container = ({ children, size = 'lg' }: Props) => {
  return <div className={styles[`content-size-${size}`]}>{children}</div>;
};

export default Container;
