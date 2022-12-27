import Link from 'next/link';
import styles from './Navbar.module.scss';

const links: { id: number; name: string; slug: string }[] = [
  {
    id: 1,
    name: 'Home',
    slug: '/',
  },
  {
    id: 2,
    name: 'About',
    slug: '/about',
  },
  {
    id: 3,
    name: 'Projects',
    slug: '/projects',
  },
  {
    id: 4,
    name: 'Blog',
    slug: '/blog',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.nav} data-testid="main-nav">
      <div className={styles.container}>
        <div className={styles.navbar}>
          <ul className={styles.navbarLinks}>
            {links &&
              links.map(link => (
                <li key={link.id}>
                  <Link href={link.slug} legacyBehavior>
                    {link.name}
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
