import Link from 'next/link';
import { useRouter } from 'next/router';
import * as styles from './Banner.css';

const navLinks: {
  id: number;
  name: string;
  href: string;
}[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About',
    href: '/about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '/projects',
  },
  {
    id: 4,
    name: 'Blog',
    href: '/blog',
  },
];

const Banner2 = () => {
  const router = useRouter();
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.group}>
          {navLinks &&
            navLinks.map(link => (
              <Link
                href={link.href}
                key={link.id}
                className={styles.anchor}
                aria-current={router.pathname === '/' ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};
export default Banner2;
