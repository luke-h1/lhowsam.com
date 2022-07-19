import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';

const routes: { id: number; text: string; slug: string }[] = [
  {
    id: 1,
    text: 'Home',
    slug: '/',
  },
  {
    id: 2,
    text: 'About',
    slug: '/about',
  },
  {
    id: 3,
    text: 'Blog',
    slug: '/blog',
  },
  {
    id: 4,
    text: 'Projects',
    slug: '/projects',
  },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {routes &&
          routes.map(route => (
            <li key={route.id} className={styles.link}>
              <Link href={route.slug}>
                <a className={styles.label}>{route.text}</a>
              </Link>
              {pathname === route.slug ||
                (pathname.startsWith(route.slug) && route.slug !== '/' && (
                  <motion.div
                    className={styles.active}
                    layoutId="active"
                    transition={{
                      type: 'spring',
                      stiffness: 270,
                      damping: 20,
                    }}
                  />
                ))}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
