import React from 'react';
import { Flex, Heading, Text, Box } from '@chakra-ui/react';

const Intro = () => {
  return (
    <>
      <Flex direction="column" justify="center" align="center" mb="8">
        <Box>
          <Heading as="h1" fontSize="40px" mb={8}>
            Hi, I'm Luke 👋
            {' '}
          </Heading>
        </Box>

        <Flex
          direction="column"
          justify="center"
          align="center"
          mb="8"
          maxW="700px"
        >
          <Text as="h3" fontSize="21px" data-testid="intro" align="center">
            I'm passionate about solving technical problems and coming up with
            creative solutions.I enjoy working with the JAMstack, React, Node,
            testing technologies + practices & various dev-ops technologies
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default Intro;
