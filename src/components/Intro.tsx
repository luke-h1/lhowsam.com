import {
  Container,
  Stack,
  Flex,
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  HStack,
  Image,
  IconButton,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Intro = () => {
  return (
    <Container maxW="7xl">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <br />
            <Text as="span">Hey 👋, I'm Luke</Text>
          </Heading>
          <Text color="gray.500" fontSize="18px">
            I like building and testing projects that are scalable, performant &
            user friendly. I currently work as a software tester where I do a
            mixture of manual & automated testing in an agile environment
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <ChakraLink
              py={2}
              px={4}
              href="https://github.com/luke-h1"
              rounded="sm"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoGithub} />
                {' '}
                <Text>Github</Text>
              </HStack>
            </ChakraLink>
            <ChakraLink
              py={2}
              px={4}
              href="https://www.linkedin.com/in/lukehowsam"
              rounded="sm"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoLinkedin} />
                {' '}
                <Text>Linkedin</Text>
              </HStack>
            </ChakraLink>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Box
            position="relative"
            height="300px"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
          >
            <IconButton
              aria-label="btn"
              variant="ghost"
              _hover={{ bg: 'transparent' }}
              size="lg"
              color="white"
              position="absolute"
              left="50%"
              top="50%"
              right="50%"
              transform="translateX(-50%) translateY(-50%)"
            />
            <Center py={5}>
              <Box
                role="group"
                p={3}
                maxW="245px"
                w="full"
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="2xl"
                pos="relative"
                zIndex={1}
              >
                <Box
                  rounded="lg"
                  pos="relative"
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 3,
                    left: 0,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    height={230}
                    width={300}
                    objectFit="cover"
                    src="/images/luke.jpeg"
                  />
                </Box>
                <Stack pt={10} align="center">
                  <Text
                    color="gray.500"
                    fontSize="sm"
                    textTransform="uppercase"
                  >
                    Brand
                  </Text>
                  <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
                    Nice Chair, pink
                  </Heading>
                  <Stack direction="row" align="center">
                    <Text fontWeight={800} fontSize="xl">
                      $57
                    </Text>
                    <Text textDecoration="line-through" color="gray.600">
                      $199
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Intro;
