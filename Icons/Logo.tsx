import { useColorMode, Text } from '@chakra-ui/react';
import { FiCode } from 'react-icons/fi';

const Logo = (url) => {
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <Text color={Colors[colorMode]}>
      <a href={url} target="_blank" rel="noreferrer">
        <FiCode />
      </a>
    </Text>
  );
};
export default Logo;
