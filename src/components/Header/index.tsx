import { Box, useColorMode } from '@chakra-ui/react';

import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        as="header"
        bg={colorMode === 'dark' ? '#1A202C' : '#fff'}
        color="white"
        fontSize="18px"
      >
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
    </>
  );
};
export default Header;
