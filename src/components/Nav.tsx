import { NavLinks } from '@src/data/NavLinks';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './nav.module.css';

interface NavProps {
  className?: string;
}

const Nav = ({ className }: NavProps) => {
  return (
    <nav className={classnames(styles.nav, className)}>
      <a className={styles.siteLogo} href="/">
        <Image
          src="/icons/logo.png"
          height={32}
          layout="fixed"
          priority
          width={32}
        />
        <span>Luke H</span>
      </a>
      <ul>
        {NavLinks &&
          NavLinks.map(link => (
            <li key={link.id}>
              <Link href={link.slug}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
export default Nav;
