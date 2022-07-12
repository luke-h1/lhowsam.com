import Link from 'next/link';
import { ReactNode } from 'react';
import { FiCode } from 'react-icons/fi';
import Nav from '../Nav/Nav';
import styles from './Page.module.scss';

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <span className="sr-only">home</span>
            <FiCode fontSize="28px" />
          </a>
        </Link>
        <Nav />
        <div className={styles.right}>
          <Link href="/contact">
            <a className={styles.contact}>Contact</a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Page;
