import Link from 'next/link';
import styles from './Footer.module.scss';

const links: { id: number; name: string; slug: string }[] = [
  {
    id: 1,
    name: 'Home',
    slug: '/',
  },
  {
    id: 2,
    name: 'About',
    slug: '/about',
  },
  {
    id: 3,
    name: 'Projects',
    slug: '/projects',
  },
  {
    id: 4,
    name: 'Blog',
    slug: '/blog',
  },
  {
    id: 5,
    name: 'Links',
    slug: '/links',
  },
];

const FooterLinks = () => {
  return (
    <ul className={styles.pageList} data-testid="footer-nav">
      {links &&
        links.map(link => (
          <li key={link.id}>
            <Link href={link.slug}>{link.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default FooterLinks;
