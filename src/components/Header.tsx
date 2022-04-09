import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiCode } from 'react-icons/fi';
import ThemeChanger from './ThemeChanger';
import styles from './header.module.scss';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header = (): JSX.Element => {
  const router = useRouter();
  const pathname = router.pathname.split('/[')[0]; // active paths on dynamic subpages
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
              {links.map(({ name, path }) => (
                <li
                  key={path}
                  className={
                    pathname === path ? styles.linkActive : styles.link
                  }
                >
                  <Link href={path}>
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
