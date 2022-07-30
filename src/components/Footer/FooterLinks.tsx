import Link from 'next/link';
import styles from './Footer.module.scss';

const links: { id: number; name: string; href: string }[] = [
  {
    id: 1,
    name: 'About',
    href: '/about',
  },
  {
    id: 2,
    name: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    name: 'Blog',
    href: '/blog',
  },
  {
    id: 4,
    name: 'Uses',
    href: '/uses',
  },
];

const FooterLinks = () => {
  return (
    <ul className={styles.pageList}>
      {links &&
        links.map(link => (
          <li key={link.id}>
            <Link href={link.href} scroll={false}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default FooterLinks;
