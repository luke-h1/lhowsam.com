/* eslint-disable */
import { Box, Alert, Divider, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { Code } from '../components/Code';
import { H1, H2, H3, H4, H5, H6, P } from '../components/Typography';

const Quote = (props) => {
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

// const DocsHeading = (props): any => (
//   <Heading
//     css={{
//       scrollMarginTop: '100px',
//       scrollSnapMargin: '100px', // Safari
//       '&[id]': {
//         pointerEvents: 'none',
//       },
//       '&[id]:before': {
//         display: 'block',
//         height: ' 6rem',
//         marginTop: '-6rem',
//         visibility: 'hidden',
//         content: '""',
//       },
//       '&[id]:hover a': { opacity: 1 },
//     }}
//     {...props}
//     mb="1em"
//     mt="2em"
//   >
//     <Box pointerEvents="auto">
//       {props.children}
//       {props.id && (
//         <Box
//           aria-label="anchor"
//           as="a"
//           color="blue.500"
//           fontWeight="normal"
//           outline="none"
//           _focus={{
//             opacity: 1,
//             boxShadow: 'outline',
//           }}
//           opacity="0"
//           ml="0.375rem"
//           href={`#${props.id}`}
//         >
//           #
//         </Box>
//       )}
//     </Box>
//   </Heading>
// );

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
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  code: Code,
  inlineCode: <Code colorScheme="yellow" fontSize="0.84em" />,
  br: <Box height="24px" />,
  hr: Hr,
  ul: <Box as="ul" pt={2} pl={4} ml={2} />,
  ol: <Box as="ol" pt={2} pl={4} ml={2} />,
  li: <Box as="li" pb={1} />,
  blockquote: Quote,
};
export default MDXComponents;
