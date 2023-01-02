import { ReactNode } from 'react';
import styles from './GridItem.module.scss';

interface Props {
  children: ReactNode;
  as?: 'section' | 'div' | 'article';
}

const GridItem = ({ children, as: Element = 'section' }: Props) => {
  return <Element className={styles.gridItem}>{children}</Element>;
};
export default GridItem;
