import { ReactNode } from 'react';
import * as styles from './Card.css';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <article className={styles.root}>{children}</article>;
};
export default Card;
