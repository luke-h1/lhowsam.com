import { NavLinks } from '@src/data/NavLinks';
import classnames from 'classnames';
import Link from 'next/link';
import ThemeChanger from './ThemeChanger';
import styles from './nav.module.scss';

interface NavProps {
  className?: string;
}

const Nav = ({ className }: NavProps) => {
  return (
    <nav className={classnames(styles.nav, className)}>
      <Link href="/">
        <a className={styles.siteLogo}>
          <span>Luke H</span>
        </a>
      </Link>
      <ul>
        {NavLinks &&
          NavLinks.map(link => (
            <li key={link.id}>
              <Link href={link.slug}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        <ThemeChanger />
      </ul>
    </nav>
  );
};
export default Nav;
