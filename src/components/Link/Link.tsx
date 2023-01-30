import classNames from 'classnames';
import NextLink from 'next/link';
import type { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import * as styles from './Link.css';

type Props = {
  children: ReactNode;
  variant?: 'highlight' | 'neutral';
  className?: string;
  href: string;
} & Omit<LinkProps, 'href'>;

const Link = ({
  children,
  variant = 'neutral',
  className,
  href,
  ...props
}: Props) => {
  const isAbsolute = typeof href === 'string' && href.startsWith('http');
  const isHash = typeof href === 'string' && href.startsWith('#');

  if (isAbsolute || isHash) {
    return (
      <a
        rel={isAbsolute ? 'noopener noreferrer' : undefined}
        target={isAbsolute ? '_blank' : undefined}
        className={classNames(styles.variants[variant], className)}
        {...props}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={classNames(styles.variants[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  );
};
export default Link;
