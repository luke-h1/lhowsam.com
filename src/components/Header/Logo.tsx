import { chakra, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { HiOutlineCode } from 'react-icons/hi';

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <NextLink href="/">
        <chakra.a
          href="/"
          userSelect="none"
          fontSize="2rem"
          fontWeight="700"
          color={colorMode === 'light' ? '#000' : '#fff'}
        >
          <HiOutlineCode fontSize="28px" />
        </chakra.a>
      </NextLink>
    </>
  );
};
export default Logo;
