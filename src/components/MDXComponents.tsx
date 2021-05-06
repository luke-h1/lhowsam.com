import Image from 'next/image';
import React from 'react';
import {
  H1, H2, H3, H4, H5, H6, P,
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
  h5: (props: MdxRemote.Source) => <H5 {...props} />,
  h6: (props: MdxRemote.Source) => <H6 {...props} />,
  br: (props: MdxRemote.Source) => <br {...props} className="mb-4" />,
  hr: (props: MdxRemote.Source) => <hr {...props} className="text-gray-600" />,
  ul: (props: string | null) => (
    <ul {...props} className="list-none mt-4 mb-4" />
  ),
  ol: (props: MdxRemote.Components) => <ol {...props} />,
  li: (props: MdxRemote.Components) => (
    <li className="mt-4 mb-4 ml-4 list-disc" {...props} />
  ),
  P: (props: MdxRemote.Source) => <P {...props} />,
  code: CustomCode,
  blockquote: Quote,
};

export default MDXComponents;
