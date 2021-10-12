import {
  Heading, Box, Text, Button, useColorMode,
} from '@chakra-ui/react';
import React from 'react';

const ContactSection = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box as="section" mt={20} mb={20}>
        <Heading mb={2}>Contact</Heading>
        <Text>
          Although I'm not actively looking for new opportunties, my inbox is
          still open.
        </Text>
        <a href="mailto:luke.howsam54@gmail.com" rel="noreferrer">
          <Button
            background={colorMode === 'light' ? '#A0AEC0' : '#63B3ED'}
            borderRadius="8px"
            mt="4"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Email
          </Button>
        </a>
      </Box>
    </>
  );
};
export default ContactSection;
