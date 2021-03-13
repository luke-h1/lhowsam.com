import { useColorMode, Text } from '@chakra-ui/react';
import { FiCode } from 'react-icons/fi';

export const Logo = (url: any) => {
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <Text color={Colors[colorMode]} _hover={{ color: '#2EC0F9' }}>
      <a href={url} target="_blank" rel="noreferrer">
        <FiCode />
      </a>
    </Text>
  );
};
