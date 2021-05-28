import { Text } from '@chakra-ui/react';
import { MdxRemote } from 'next-mdx-remote/types';
import React from 'react';

export const H1 = ({ children }: MdxRemote.Components) => (
  <Text as="h1" fontSize="35px" py={1} mt={4} mb={2}>
    {children}
  </Text>
);

export const H2 = ({ children }: MdxRemote.Components) => (
  <Text as="h2" fontSize="30px" py={1} mt={1} mb={2}>
    {children}
  </Text>
);

export const H3 = ({ children }: MdxRemote.Components) => (
  <Text as="h3" fontSize="27px" py={1} mt={1} mb={1}>
    {children}
  </Text>
);

export const H4 = ({ children }: MdxRemote.Components) => (
  <Text as="h4" fontSize="23px" py={1} mt={1} mb={1}>
    {children}
  </Text>
);

export const P = ({ children }: MdxRemote.Components) => (
  <Text as="p" fontSize="18px" py={1} mt={1} mb={1}>
    {children}
  </Text>
);
