import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { CommandMenuProps } from '../CommandMenu';
import CommandMenuBanner from '../CommandMenuBanner';
import Link from '../Link';
import * as styles from './Header.css';

type Props = CommandMenuProps;

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

const Header = ({ open, setOpen }: Props) => {
  const pathname = usePathname();

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.group}>
          {headerLinks &&
            headerLinks.map(link => (
              <Link
                href={link.href}
                className={styles.anchor}
                key={link.id}
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
          <CommandMenuBanner setOpen={setOpen} open={open} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
