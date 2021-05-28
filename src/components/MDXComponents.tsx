import Image from 'next/image';
import React from 'react';
import {
  H1, H2, H3, H4, P,
} from '@src/components/Typography';
import { MdxRemote } from 'next-mdx-remote/types';
import { CustomCode } from '../components/CustomCode';

const Quote = (props: MdxRemote.Source) => {
  return <p className="text-red-500" {...props} />;
};

const MDXComponents = {
  Image,
  a: (props: MdxRemote.Source) => (
    <a className="text-blue-300 underline hover:text-blue-500" {...props} />
  ),
  h1: (props: MdxRemote.Source) => <H1 {...props} />,
  h2: (props: MdxRemote.Source) => <H2 {...props} />,
  h3: (props: MdxRemote.Source) => <H3 {...props} />,
  h4: (props: MdxRemote.Source) => <H4 {...props} />,
  hr: (props: MdxRemote.Source) => <hr {...props} className="underline" />,
  ul: (props: string | null) => (
    <ul {...props} className="list-none mt-4 mb-4" />
  ),
  ol: (props: MdxRemote.Components) => <ol {...props} />,
  P: (props: MdxRemote.Source) => <P {...props} />,
  code: CustomCode,
  blockquote: Quote,
};

export default MDXComponents;
