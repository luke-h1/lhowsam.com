import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
    </>
  );
};
export default Layout;
