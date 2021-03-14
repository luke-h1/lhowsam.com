import { useColorMode, Text } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export const CloseIcon = () => {
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
  return (
    <Text color={Colors[colorMode]}>
      <AiOutlineClose />
    </Text>
  );
};
