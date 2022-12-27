import classNames from 'classnames';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Highlight.module.scss';

interface Props {
  variant: 'success' | 'error' | 'info' | 'warning';
  title: string;
  children: ReactNode;
}

const Highlight = ({ children, title, variant }: Props) => {
  return (
    <aside className={classNames(styles.wrapper, styles[variant])}>
      <div className={styles.icon}>
        <Image src={`/icons/${variant}.svg`} width="30" height="30" alt="" />
      </div>
      <strong className={styles.title}>{title}</strong>
      {children}
    </aside>
  );
};

export default Highlight;
