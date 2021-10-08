import * as React from 'react';
import NextLink from 'next/link';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactChild;
}

const Link = (props: Props) => {
  const { href, children, ...rest } = props;

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};
export default Link;
