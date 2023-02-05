import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import Link from '../Link/Link';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';
import * as styles from './Footer.css';
import ThemeSelect from './ThemeSelect/ThemeSelect';

interface FooterLink {
  id: number;
  text: string;
  href: string;
}

const links: FooterLink[] = [
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

const socialLinks: FooterLink[] = [
  {
    id: 1,
    text: 'Github',
    href: 'https://github.com/luke-h1',
  },
  {
    id: 2,
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/lukehowsam',
  },
  {
    id: 3,
    text: 'Email',
    href: 'mailto:luke.howsam@yahoo.com',
  },
];

const Footer = () => {
  return (
    <Box
      as="article"
      className={styles.root}
      maxWidth={{ md: 'text' }}
      data-testid="footer"
    >
      <div className={styles.container}>
        <div>
          <Heading color="foregroundAction">Navigate</Heading>
          <Spacer height="md" />
          <ul className={styles.links}>
            {links &&
              links.map(link => (
                <li key={link.id}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <Heading color="foregroundAction">Get in touch</Heading>
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
        <div className={styles.copy}>
          <Text color="foregroundNeutral" fontSize="sm">
            {new Date().getFullYear()} - lhowsam.com
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
