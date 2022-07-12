import NextLink from 'next/link';
import { ReactNode } from 'react';
import RightTopArrow from '../../../../public/svg/right-top-arrow.svg';
import styles from './Link.module.scss';

interface Props {
  children: ReactNode;
  href: string;
}

const Link = ({ children, href }: Props) => {
  const externalLink =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:');

  return (
    <NextLink href={href}>
      <a
        className={styles.link}
        rel={externalLink ? 'noopener noreferrer' : undefined}
        target={externalLink ? '_blank' : undefined}
      >
        <span className={styles.text}>{children}</span>
        <span className={styles.icon}>
          &#xfeff;
          <RightTopArrow />
        </span>
      </a>
    </NextLink>
  );
};

export default Link;
