import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Highlight.module.scss';

interface Props {
  variant: 'success' | 'error' | 'warning';
  title: string;
  children: ReactNode;
}

const Highlight = () => {
  return <div>highlight</div>;
};
export default Highlight;
