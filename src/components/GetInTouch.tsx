import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';

const GetInTouch = () => {
  return (
    <Box position="relative">
      <Container
        as={Flex}
        direction="column"
        alignItems="center"
        maxW="7xl"
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{
              base: '3xl',
              sm: '4xl',
              md: '5xl',
              lg: '6xl',
            }}
          >
            Get In Touch
            {' '}
          </Heading>
          <Stack
            bg="gray.50"
            rounded="xl"
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
          >
            <Stack spacing={6}>
              <Text color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
                I'm not currently seeking new opportunities but feel free to get
                in touch below or via the below platforms
              </Text>

              <Box as="form" mt={10}>
                <Stack spacing={4}>
                  <Input
                    placeholder="Firstname"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                    placeholder="firstname@lastname.io"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Textarea
                    placeholder="Message"
                    bg="gray.100"
                    minHeight="150px"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Button fontFamily="heading" bg="gray.200" color="gray.800">
                    Upload CV
                  </Button>
                </Stack>
                <Button
                  fontFamily="heading"
                  mt={8}
                  w="full"
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color="white"
                  _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
                    boxShadow: 'xl',
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default GetInTouch;
