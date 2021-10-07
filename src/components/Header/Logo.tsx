import { chakra, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

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
          LOGO
        </chakra.a>
      </NextLink>
    </>
  );
};
export default Logo;
