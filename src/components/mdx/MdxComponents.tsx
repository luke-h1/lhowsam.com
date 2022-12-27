import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Sparkles from '../Sparkles/Sparkles';

import { Code } from './Code/Code';
import Heading from './Heading/Heading';
import Highlight from './Highlight/Highlight';

type HeadingComponentProps = {
  children: string;
  url: string;
};

type ImageProps = {
  src: string;
  alt: string;
};

const getHeadingProps = ({ children, url }: HeadingComponentProps) => {
  return {
    slug: children,
    url,
  };
};

const customMdxComponents = {
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
  ) => {
    return <Code {...props} />;
  },
  h2: (props: HeadingComponentProps) => (
    <Heading as="h2" {...getHeadingProps(props)} />
  ),
  h3: (props: HeadingComponentProps) => (
    <Heading as="h3" {...getHeadingProps(props)} />
  ),
  h4: (props: HeadingComponentProps) => (
    <Heading as="h4" {...getHeadingProps(props)} />
  ),
  h5: (props: HeadingComponentProps) => (
    <Heading as="h5" {...getHeadingProps(props)} />
  ),
  h6: (props: HeadingComponentProps) => (
    <Heading as="h6" {...getHeadingProps(props)} />
  ),
  img: ({ alt, src }: ImageProps) => <Image src={src} alt={alt ?? ''} />,
  Sparkles,
  Image,
  Highlight,
};
export default customMdxComponents;
