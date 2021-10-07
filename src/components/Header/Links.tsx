import { Box, Link as ChakraLink, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { NavLinks } from '@src/data/NavLinks';

interface LinksProps {
  onClick: () => void;
}

const Links = ({ onClick }: LinksProps) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {NavLinks
        && NavLinks.map((link) => (
          <Box
            as="li"
            listStyleType="none"
            px={{ lg: '8' }}
            py={{ base: '3' }}
            key={link.id}
          >
            <NextLink href={link.slug}>
              <ChakraLink
                href={link.slug}
                onClick={onClick}
                color={colorMode === 'light' ? '#000' : '#fff'}
              >
                {link.title}
              </ChakraLink>
            </NextLink>
          </Box>
        ))}
    </>
  );
};
export default Links;
