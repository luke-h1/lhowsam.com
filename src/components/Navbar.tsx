import Link from 'next/link';
import styles from './Navbar.module.scss';

const links: { id: number; name: string; href: string }[] = [
  {
    id: 1,
    name: 'About',
    href: '/about',
  },
  {
    id: 2,
    name: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    name: 'Blog',
    href: '/blog',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/" scroll={false}>
            <a className={styles.linkTitle}>
              <span>Luke H</span>
            </a>
          </Link>
          <ul className={styles.navbarLinks}>
            {links &&
              links.map(link => (
                <li key={link.id}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
