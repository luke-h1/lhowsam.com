import {
  Box,
  Alert,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import CodeBlock from './CodeBlock';

const CustomLink = ({ href }: { href: string }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)',
  };
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} />
      </NextLink>
    );
  }
  return <Link color={color[colorMode]} isExternal />;
};

const Quote = () => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900',
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props: any) => (
    <Heading as="h2" size="lg" fontWeight="bold" {...props} />
  ),
  h3: (props: any) => (
    <Heading as="h3" size="md" fontWeight="bold" {...props} />
  ),
  h4: (props: any) => (
    <Heading as="h4" size="sm" fontWeight="bold" {...props} />
  ),
  h5: (props: any) => (
    <Heading as="h5" size="sm" fontWeight="bold" {...props} />
  ),
  h6: (props: any) => (
    <Heading as="h6" size="xs" fontWeight="bold" {...props} />
  ),
  Code: (props: any) => <CodeBlock {...props} />,
  inlineCode: (props: any) => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
  br: (props: any) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props: any) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
};
export default MDXComponents;
