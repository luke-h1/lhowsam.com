import { Flex } from '@chakra-ui/react';
import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      alignItems="center"
      mb={3}
      maxW="1000px"
    >
      {children}
    </Flex>
  );
};
export default Wrapper;
