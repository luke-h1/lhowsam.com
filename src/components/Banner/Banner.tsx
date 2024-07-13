import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { CommandMenuProps } from '../CommandMenu/CommandMenu';
import CommandMenuBanner from '../CommandMenuBanner/CommandMenuBanner';
import Link from '../Link/Link';
import * as styles from './Banner.css';

type Props = CommandMenuProps;

const Banner = ({ open, setOpen }: Props) => {
  const pathname = usePathname();

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.group}>
          <Link
            href="/"
            className={styles.anchor}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            {pathname === '/' && (
              <motion.span layoutId="highlight" className={styles.highlight} />
            )}
            Home
          </Link>
          <Link
            href="/about"
            className={styles.anchor}
            aria-current={pathname === '/about' ? 'page' : undefined}
          >
            {pathname === '/about' && (
              <motion.span layoutId="highlight" className={styles.highlight} />
            )}
            About
          </Link>
          <Link
            href="/blog"
            className={styles.anchor}
            aria-current={pathname === '/blog' ? 'page' : undefined}
          >
            {pathname === '/blog' && (
              <motion.span layoutId="highlight" className={styles.highlight} />
            )}
            Blog
          </Link>
          <Link
            href="/projects"
            className={styles.anchor}
            aria-current={pathname === '/projects' ? 'page' : undefined}
          >
            {pathname === '/projects' && (
              <motion.span layoutId="highlight" className={styles.highlight} />
            )}
            Projects
          </Link>
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
export default Banner;
