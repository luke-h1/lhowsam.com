import Link from 'next/link';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface Iprops {
  href: string;
}

const CustomLink: FunctionComponent<Iprops> = (props) => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} style={{ color: 'blue' }} />
      </Link>
    );
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
};
export default MDXComponents;
