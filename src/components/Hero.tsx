import React from 'react';
import {
  useColorMode,
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
} from '@chakra-ui/react';

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      minH="40vh"
      mb={13}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '100%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Hey, I'm Luke 👋
        </Heading>

        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign="left"
        >
          I'm a
          {' '}
          <strong>software tester</strong>
          {' '}
          and
          {' '}
          <strong>developer</strong>
          {' '}
          who lives and works in Sheffield, UK. I like building and testing
          projects that are scalable, performant & user friendly
        </Heading>
        {process.env.NODE_ENV === 'production' ? null : (
          <Button
            background={colorMode === 'light' ? '#A0AEC0' : '#63B3ED'}
            borderRadius="8px"
            mt="4"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            More about me
          </Button>
        )}
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image
          src="/images/luke.jpeg"
          size="100%"
          rounded="1rem"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
};
export default Hero;
