import Link from 'next/link';
import { ReactNode } from 'react';

const CustomLink = (props: { children?: ReactNode; href: string }) => {
  const { href, children } = props;

  if (href?.startsWith('/')) {
    return (
      <Link {...props} href={href}>
        {children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Components = {
  a: CustomLink,
};

export default Components;
