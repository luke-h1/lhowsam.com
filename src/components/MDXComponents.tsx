import Image from 'next/image';
import React from 'react';
import {
  H1, H2, H3, H4, P,
} from '@src/components/Typography';
import Code from './Code';

const Quote = (props: any) => {
  return <p className="text-red-500" {...props} />;
};

const MDXComponents = {
  Image,
  a: (props: any) => (
    <a className="text-blue-300 underline hover:text-blue-500" {...props} />
  ),
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  hr: (props: any) => <hr {...props} className="underline" />,
  ul: (props: string | null) => (
    <ul {...props} className="list-none mt-4 mb-4" />
  ),
  ol: (props: any) => <ol {...props} />,
  P: (props: any) => <P {...props} />,
  code: Code,
  blockquote: Quote,
};

export default MDXComponents;
