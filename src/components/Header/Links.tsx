import { Box, chakra } from '@chakra-ui/react';
import NextLink from 'next/link';

import { NavLinks } from '@src/data/NavLinks';

interface Props {
  onClick: () => void;
}

const Links = ({ onClick }: Props) => {
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
              <chakra.a href={link.slug} onClick={onClick}>
                {link.text}
              </chakra.a>
            </NextLink>
          </Box>
        ))}
    </>
  );
};
export default Links;
