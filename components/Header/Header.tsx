import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box, Flex, Text, Button,
} from '@chakra-ui/react';
import Logo from '../../Icons/Logo';

import { CloseIcon, MenuIcon } from '../../Icons/HeaderIcons';

interface MenuProps {
  children: string;
  isLast?: Boolean;
  href: string;
}

const MenuItems: React.FC<MenuProps> = (props) => {
  const {
    children, isLast, href, ...rest
  } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={href}><a>{children}</a></Link>
    </Text>
  );
};

interface HeaderProps {
  props: void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      {...props}
    >
      <Flex align="center">
        <Link href="/"><a><Logo /></a></Link>

      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems href="/">Home</MenuItems>
          <MenuItems href="/about">About</MenuItems>
          <MenuItems href="/projects">Projects</MenuItems>
          <MenuItems href="/blog">Blog</MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
