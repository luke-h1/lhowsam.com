import clsx from 'clsx';
import NextLink from 'next/link';
import type { LinkProps } from 'next/link';
import { CSSProperties, ReactNode } from 'react';
import * as styles from './Link.css';

type Props = {
  children: ReactNode;
  variant?: 'highlight' | 'neutral';
  className?: string;
  href: string;
  css?: CSSProperties;
} & Omit<LinkProps, 'href'>;

const Link = ({
  children,
  variant = 'neutral',
  className,
  href,
  prefetch = true,
  css,
  ...props
}: Props) => {
  const isAbsolute = typeof href === 'string' && href.startsWith('http');
  const isHash = typeof href === 'string' && href.startsWith('#');

  if (isAbsolute || isHash) {
    return (
      <a
        rel={isAbsolute ? 'noopener noreferrer' : undefined}
        target={isAbsolute ? '_blank' : undefined}
        className={clsx(styles.variants[variant], className)}
        style={{
          ...css,
        }}
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
      className={clsx(styles.variants[variant], className)}
      prefetch={prefetch}
      style={{
        ...css,
      }}
      {...props}
    >
      {children}
    </NextLink>
  );
};
export default Link;
