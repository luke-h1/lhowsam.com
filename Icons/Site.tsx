import { useColorMode, Text } from '@chakra-ui/react';
import { GoBrowser } from 'react-icons/go';

const SiteIcon = (url) => {
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <Text color={Colors[colorMode]}>
      <a href={url} target="_blank" rel="noreferrer">
        <GoBrowser />
      </a>
    </Text>
  );
};
export default SiteIcon;
