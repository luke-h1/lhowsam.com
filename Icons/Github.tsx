import { useColorMode, Text } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';

const SiteIcon = (url) => {
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <Text color={Colors[colorMode]}>
      <a href={url} target="_blank" rel="noreferrer">
        <FiGithub />
      </a>
    </Text>
  );
};
export default SiteIcon;
