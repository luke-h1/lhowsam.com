import Heading from '../Heading';
import Link from '../Link';
import NowPlaying from '../NowPlaying';
import Spacer from '../Spacer';
import Text from '../Text';
import ThemeSelect from '../ThemeSelect';
import * as styles from './Footer.css';

interface FooterLink {
  id: number;
  text: string;
  href: string;
}

export const navigationLinks: FooterLink[] = [
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
    text: 'Work',
    href: '/work',
  },
  {
    id: 4,
    text: 'Blog',
    href: '/blog',
  },
  {
    id: 5,
    text: 'Projects',
    href: '/projects',
  },
  {
    id: 6,
    text: 'Talks',
    href: '/talks',
  },
  {
    id: 7,
    text: 'Status',
    href: 'https://status.lhowsam.com',
  },
];

export const socialLinks: FooterLink[] = [
  {
    id: 1,
    text: 'Github',
    href: 'https://github.com/luke-h1',
  },
  {
    id: 2,
    text: 'Twitter',
    href: 'https://x.com/luke_h1__',
  },
  {
    id: 3,
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/lukehowsam',
  },
  {
    id: 4,
    text: 'Email',
    href: 'mailto:work@lhowsam.com?subject=Get in touch (lhowsam.com)',
  },
];

export default function Footer() {
  return (
    <footer className={styles.root} data-testid="footer">
      <div className={styles.container}>
        <div>
          <Heading>Navigate</Heading>
          <Spacer height="md" />
          <ul className={styles.links} data-testid="footer-navigation-links">
            {navigationLinks &&
              navigationLinks.map(link => (
                <li key={link.id}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <Heading>Social</Heading>
          <Spacer height="md" />
          <ul className={styles.links}>
            {socialLinks &&
              socialLinks.map(link => (
                <li key={link.id}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <ThemeSelect />
        </div>
        <div className={styles.note} data-testid="footer-cc">
          <Text color="foregroundNeutral" fontSize="sm" fontFamily="mono">
            © {new Date().getFullYear()} Luke Howsam
          </Text>
        </div>
        <div className={styles.copy}>
          <NowPlaying />
        </div>
      </div>
    </footer>
  );
}
