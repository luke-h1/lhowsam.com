/* eslint-disable */
import Image from 'next/image';
import React from 'react';
import { CustomCode } from '../components/CustomCode';
import { H1, H2, H3, H4, H5, H6, P } from '@src/components/Typography'
import { MdxRemote } from 'next-mdx-remote/types';
import { ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace';

const Quote = (props: MdxRemote.Source) => { 
  return (
    <p className='text-red-500' {...props}/>
  )
}
const MDXComponents = {
  Image,
  h1: (props: MdxRemote.Source) => <H1 {...props} />,
  h2: (props: MdxRemote.Source) => <H2 {...props} />,
  h3: (props: MdxRemote.Source) => <H3 {...props} />,
  h4: (props: MdxRemote.Source) => <H4 {...props} />,
  h5: (props: MdxRemote.Source) => <H5 {...props} />,
  h6: (props: MdxRemote.Source) => <H6 {...props} />,
  br: (props: MdxRemote.Source) => <br {...props} className='mb-4'/>,
  hr: (props: MdxRemote.Source) => <hr {...props} className='text-gray-600'/>,
  ul: (props: string | null) => <ul {...props} className='list-disc mt-4 mb-4' />,
  ol: (props: ReactJSXElementChildrenAttribute) => <ol {...props} />,
  li: (props: MdxRemote.Source) => <li className='mt-4 mb-4'  {...props}/>,
  P: (props: MdxRemote.Source) =>  <P {...props} />, 
  code: CustomCode,
  blockquote: Quote,
  inlineCode: (props: MdxRemote.Source) => <p className='text-purple-600 m-0 p-0' {...props} />,
}

export default MDXComponents;
