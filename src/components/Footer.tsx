import {
  Box, Stack, ButtonGroup, IconButton,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: '4', md: '8' }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        logo here
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  </Box>
);
export default Footer;
