import { Heading, Text } from '@chakra-ui/react';

export const H1 = (props) => (
  <Heading as="h1" size="xl" pb="1rem">
    {props.children}
  </Heading>
);

export const H2 = (props) => (
  <Heading as="h2" size="lg" pb="1rem">
    {props.children}
  </Heading>
);

export const H3 = (props) => (
  <Heading as="h3" size="lg" pb="1rem">
    {props.children}
  </Heading>
);

export const H4 = (props) => (
  <Heading as="h4" size="md" pb="1rem">
    {props.children}
  </Heading>
);

export const H5 = (props) => (
  <Heading as="h5" size="md" pb="1rem">
    {props.children}
  </Heading>
);

export const H6 = (props) => (
  <Heading as="h6" size="xl" pb="1rem">
    {props.children}
  </Heading>
);

export const P = (props) => (
  <Text as="p" pb="1rem">
    {props.children}
  </Text>
);
