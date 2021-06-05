import { Text } from '@chakra-ui/react';
import React from 'react';

export const H1 = ({ children }: any) => (
  <Text as="h1" fontSize="35px" py={1} mt={4} mb={2}>
    {children}
  </Text>
);

export const H2 = ({ children }: any) => (
  <Text as="h2" fontSize="30px" py={1} mt={1} mb={2}>
    {children}
  </Text>
);

export const H3 = ({ children }: any) => (
  <Text as="h3" fontSize="27px" py={1} mt={1} mb={1}>
    {children}
  </Text>
);

export const H4 = ({ children }: any) => (
  <Text as="h4" fontSize="23px" py={1} mt={1} mb={1}>
    {children}
  </Text>
);

export const P = ({ children }: any) => (
  <Text as="p" fontSize="18px" py={1} mt={1} mb={1}>
    {children}
  </Text>
);
