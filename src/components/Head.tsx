import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'localhost:3000'
    : 'https://lhowsam.com';

interface Props {
  children?: React.ReactNode;
  description?: string;
  ogImage?: string;
  title?: string;
}

const Head = ({
  children,
  title = 'Luke Howsam, Developer & software tester',
  description = "Hey, I'm Luke I'm a software tester and developer. I like building and testing projects that are scalable, performant & user friendly. I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment",
  ogImage = '/ogImage.png',
}: Props) => {
  const router = useRouter();

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:site" content={`${BASE_URL}${router.pathname}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      {children}
    </NextHead>
  );
};

export default Head;
