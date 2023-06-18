'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import s from './Header.module.scss';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
] as const;

const Header = () => {
  const pathname = usePathname();

  const name = pathname?.split('/[')[0];

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <Link href="/" className={s.logo}>
            <img
              src="/favicon.ico"
              width="45"
              height="45"
              alt="Luke Howsam logo"
            />
          </Link>
          <nav className={s.nav}>
            <ol className={s.links}>
              {links &&
                links.map(link => (
                  <li
                    key={link.href}
                    className={name === link.href ? s.linkActive : s.link}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
            </ol>
          </nav>
          <ThemeChanger />
        </div>
      </header>
      <div className={s.spacer} />
    </>
  );
};

export default Header;
