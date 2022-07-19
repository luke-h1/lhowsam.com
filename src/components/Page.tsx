import Link from 'next/link';
import { ReactNode } from 'react';
import { FiCode } from 'react-icons/fi';
import Nav from './Nav';
import styles from './Page.module.scss';

interface Props {
  children: ReactNode;
}

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
  { name: 'Twitter', url: 'https://twitter.com/LukeH_1999' },
  { name: 'About', url: '/about' },
  { name: 'GitHub', url: 'https://github.com/luke-h1' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lukehowsam/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Projects', url: '/projects' },
];

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
      <footer className={styles.footer}>
        <ul className={styles.links}>
          {footerLinks.map(link => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Page;
