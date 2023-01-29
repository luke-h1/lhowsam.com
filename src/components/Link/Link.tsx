import classNames from 'classnames';
import NextLink from 'next/link';
import type { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import * as styles from './Link.css';

interface Props extends LinkProps {
  children: ReactNode;
  variant?: 'highlight' | 'neutral';
  className?: string;
  textDecoration?: 'underline' | 'none';
}

const Link = ({
  children,
  variant = 'neutral',
  className,
  textDecoration = 'underline',
  ...rest
}: Props) => {
  return (
    <NextLink
      className={classNames(styles.variants[variant], className)}
      style={{
        textDecoration,
      }}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
export default Link;
