import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiCode } from 'react-icons/fi';
import ThemeChanger from './ThemeChanger';
import styles from './header.module.scss';

const links = [
  { name: 'Home', slug: '/' },
  { name: 'About', slug: '/about' },
  { name: 'Blog', slug: '/blog' },
  { name: 'Projects', slug: '/projects' },
  { name: 'Contact', slug: '/contact' },
];

const Header = (): JSX.Element => {
  const router = useRouter();
  const pathname = router.pathname.split('/[')[0];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>
              <FiCode />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, slug }) => (
                <li
                  key={slug}
                  className={
                    pathname === slug ? styles.linkActive : styles.link
                  }
                >
                  <Link href={slug}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <ThemeChanger />
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  );
};

export default Header;
