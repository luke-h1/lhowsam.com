import { Box } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';

import Navbar from './Navbar';

const Header = () => {
  return (
    <Box as="header" bg="telegram.700" color="white" fontSize="18px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={[4, 6, 10, 14, 20]}
        maxW="1440px"
        mx="auto"
        h="4rem"
      >
        <Logo />
        <Navbar />
      </Box>
    </Box>
  );
};
export default Header;
