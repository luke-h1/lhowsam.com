'use client';

import Link from 'next/link';
import NowPlaying from '../NowPlaying/NowPlaying';
import s from './Footer.module.scss';

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Twitter', url: 'https://twitter.com/LukeH_1999s' },
  { name: 'Projects', url: '/projects' },

  { name: 'About', url: '/about' },
  { name: 'GitHub', url: 'https://github.com/luke-h1' },
  // { name: 'RSS', url: '/feed.xml' },

  { name: 'Blog', url: '/blog' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lukehowsam' },
  // { name: 'Sitemap', url: '/sitemap.xml' },
  { name: 'Resume', url: '/static/cv.pdf' },
] as const;

const Footer = () => {
  return (
    <footer className={s.footer} data-testid="footer">
      <ul className={s.links}>
        {footerLinks &&
          footerLinks.map(link => (
            <li key={link.name}>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
      </ul>
      <NowPlaying />
      <p className={s.copyright}>
        &copy; Luke Howsam - {new Date().getFullYear()}
      </p>
    </footer>
  );
};
export default Footer;
