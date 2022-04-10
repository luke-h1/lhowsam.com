import Header from '@src/components/Header';
import PageTransition from '@src/components/PageTransition';
import Link from 'next/link';
import { ReactNode } from 'react';
import Nav from './Nav';
import styles from './page.module.scss';

type PageProps = {
  children: ReactNode;
};

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Twitter', url: 'https://twitter.com/LukeH_1999' },
  { name: 'Contact', url: '/contact' },
  { name: 'About', url: '/about' },
  { name: 'GitHub', url: 'https://github.com/luke-h1' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lukehowsam/' },
  { name: 'Blog', url: '/blog' },
];

const Page = ({ children }: PageProps): JSX.Element => (
  <div className={styles.container}>
    {/* <Header /> */}
    <Nav />
    <main className={styles.main}>
      <PageTransition>{children}</PageTransition>
    </main>
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

export default Page;
