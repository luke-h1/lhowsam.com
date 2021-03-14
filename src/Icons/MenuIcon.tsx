import { useColorMode, Text } from '@chakra-ui/react';
import { AiOutlineBars } from 'react-icons/ai';

export const MenuIcon = () => {
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <Text color={Colors[colorMode]}>
      <AiOutlineBars />
    </Text>
  );
};
