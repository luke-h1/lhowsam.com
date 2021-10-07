import React from 'react';
import { Box } from '@chakra-ui/react';
import NextHead from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </NextHead>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};
export default Wrapper;
