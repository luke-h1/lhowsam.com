import { ReactNode } from 'react';
import * as styles from './Prose.css';

const Prose = ({ children }: { children: ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Prose;
