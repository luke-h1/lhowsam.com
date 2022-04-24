/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import CustomImage from './Image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomLink = (props: any) => {
  const { href } = props;
  if (href?.startsWith('/')) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }
  if (href.startsWith('#')) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  a: CustomLink,
  Image: CustomImage,
  Link: CustomLink,
};
export default components;
