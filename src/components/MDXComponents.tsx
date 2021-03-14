/* eslint-disable */
import { Box, Alert, Divider, useColorMode, Code } from '@chakra-ui/react';
import Image from 'next/image';
import { CustomCode } from '../components/CustomCode';
import { H1, H2, H3, H4, H5, H6, P } from '../components/Typography';

const Quote = (props: any) => {
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
      {...props}
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
  Image,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  h5: (props: any) => <H5 {...props} />,
  h6: (props: any) => <H6 {...props} />,
  br: (props: any) => <Box height="24px" {...props}/>,
  hr: (props: any) => <Hr {...props} />,
  ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props: any) => <Box as="li" pb={1} {...props} />,
  P: (props: any) =>  <P {...props} />, 
  code: CustomCode,
  blockquote: Quote,
  inlineCode: (props: any) => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
}

export default MDXComponents;
