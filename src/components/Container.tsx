import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <ChakraContainer maxW="3xl" paddingX={8} {...rest}>
      {children}
    </ChakraContainer>
  );
};
export default Container;
