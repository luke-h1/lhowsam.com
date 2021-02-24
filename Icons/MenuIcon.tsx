import { useColorMode, Text } from '@chakra-ui/react';
import { AiOutlineBars } from 'react-icons/ai';

const Logo = () => {
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
export default Logo;
