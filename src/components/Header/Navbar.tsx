import React, { useState } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import Links from './Links';
import DarkModeToggle from './DarkModeToggle';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        as="nav"
        display="flex"
        flexDir={{ base: 'row-reverse', lg: 'row' }}
        alignItems="center"
        color={colorMode === 'light' ? '#000' : '#fff'}
      >
        <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
        <Box
          as="ul"
          fontWeight="600"
          bg={{ base: 'telegram.700', lg: 'transparent' }}
          display={{
            base: isOpen ? 'block' : 'none',
            lg: 'flex',
          }}
          position={{ base: 'absolute', lg: 'static' }}
          top="5rem"
          left="5%"
          right="5%"
          rounded={{ base: 'lg', lg: 'none' }}
          py={{ base: '2', lg: '0' }}
          px={{ base: '4', lg: '0' }}
          alignItems={{ lg: 'center' }}
          boxShadow={{ base: 'xl', lg: 'none' }}
          zIndex="2"
        >
          <Links onClick={() => setIsOpen(false)} />
        </Box>

        <DarkModeToggle onClick={toggleColorMode} colorMode={colorMode} />
      </Box>
    </>
  );
};
export default Navbar;
