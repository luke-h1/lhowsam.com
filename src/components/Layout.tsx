import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Container from './Container';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Container as="main">{children}</Container>
      </Flex>
    </>
  );
};
export default Layout;
