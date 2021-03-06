import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const H1 = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h1" size="xl" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Heading>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h2" size="lg" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Heading>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h3" size="lg" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Heading>
);

export const H4 = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h4" size="md" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Heading>
);

export const H5 = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h5" size="md" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Heading>
);

export const H6 = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h6" size="xl" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Heading>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <Text as="p" pb="1rem" pt="1rem" mt="1rem" mb="1rem">
    {children}
  </Text>
);
