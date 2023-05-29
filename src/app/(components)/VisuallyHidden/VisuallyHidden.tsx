import { ReactNode } from 'react';
import * as styles from './VisuallyHidden.css';

interface Props {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const VisuallyHidden = ({ as: Element = 'span', children }: Props) => {
  return <Element className={styles.root}>{children}</Element>;
};
export default VisuallyHidden;
