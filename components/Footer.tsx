/* eslint-disable react/prop-types */
import {
  FiGithub, FiTwitter, FiMail, FiLinkedin,
} from 'react-icons/fi';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  const footerIcon = {
    light: '#000',
    dark: '#fff',
  };

  return (
    <>
      <Flex
        align="center"
        mb={4}
        direction="column"
        display={['none', 'flex', 'flex']}
      >
        <div>
          <a
            href="https://twitter.com/lukeH_1999"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="Twitter"
              icon={<FiTwitter />}
              size="lg"
              color={footerIcon[colorMode]}
              variant="ghost"
              _hover={{ color: 'blue' }}
            />
          </a>
          <a
            href="https://github.com/luke-h1"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              color={footerIcon[colorMode]}
              variant="ghost"
              _hover={{ color: 'blue' }}
            />
          </a>
          <a
            href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="Email"
              icon={<FiMail />}
              size="lg"
              color={footerIcon[colorMode]}
              variant="ghost"
              _hover={{ color: 'blue' }}
            />
          </a>
          <a
            href="linkedin"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="Linkedin"
              icon={<FiLinkedin />}
              size="lg"
              color={footerIcon[colorMode]}
              variant="ghost"
              _hover={{ color: 'blue' }}
            />
          </a>
        </div>
      </Flex>
    </>
  );
};

export default Footer;
