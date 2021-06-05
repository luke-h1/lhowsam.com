import React from 'react';
import styled from '@emotion/styled';

interface WrapperProps {
  children: React.ReactNode;
}

const WrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  max-width: 100vw;
  margin-bottom: 1rem;
`;

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <WrapperStyles>{children}</WrapperStyles>;
};
export default Wrapper;
