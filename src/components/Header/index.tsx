'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CommandMenu from '../CommandMenu';
import Link from '../Link';
import * as styles from './Header.css';

interface HeaderLink {
  id: number;
  text: string;
  href: string;
}

const headerLinks: HeaderLink[] = [
  {
    id: 1,
    text: 'Home',
    href: '/',
  },
  {
    id: 2,
    text: 'About',
    href: '/about',
  },
  {
    id: 3,
    text: 'Blog',
    href: '/blog',
  },
  {
    id: 4,
    text: 'Projects',
    href: '/projects',
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.group} data-testid="header-links">
          {headerLinks &&
            headerLinks.map(link => (
              <Link
                href={link.href}
                className={styles.anchor}
                key={link.id}
                id={`nav-${link.id}`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="highlight"
                    className={styles.highlight}
                  />
                )}
                {link.text}
              </Link>
            ))}
        </div>
        <div className={styles.group}>
          {/* <Link
            href="https://www.linkedin.com/in/lukehowsam"
            className={styles.anchor}
          >
            <VisuallyHidden>LinkedIn</VisuallyHidden>
            <Linkedin width=".95em" />
          </Link>
          <Link href="https://github.com/luke-h1" className={styles.anchor}>
            <VisuallyHidden>GitHub</VisuallyHidden>
            <GitHub width=".95em" />
          </Link>
          <Link href="https://x.com/LukeH_1999" className={styles.anchor}>
            <VisuallyHidden>Twitter</VisuallyHidden>
            <Twitter width=".95em" />
          </Link>
           */}
          <CommandMenu />
        </div>
      </nav>
    </header>
  );
};
export default Header;
