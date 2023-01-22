import classNames from 'classnames';
import NextLink from 'next/link';
import type { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import * as styles from './Link.css';

interface Props extends LinkProps {
  children: ReactNode;
  variant?: 'highlight' | 'neutral';
}

const Link = ({ children, variant = 'neutral', ...rest }: Props) => {
  return (
    <NextLink className={classNames(styles.variants[variant])} {...rest}>
      {children}
    </NextLink>
  );
};
export default Link;
