import Link from 'next/link';
import { FiCode } from 'react-icons/fi';
import styles from './Navbar.module.scss';

const links: { id: number; name: string; slug: string }[] = [
  {
    id: 1,
    name: 'About',
    slug: '/about',
  },
  {
    id: 2,
    name: 'Projects',
    slug: '/projects',
  },
  {
    id: 3,
    name: 'Blog',
    slug: '/blog',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/" legacyBehavior>
            <FiCode fontSize="29.5px" className={styles.logo} />
          </Link>
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
