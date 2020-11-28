/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { BiCodeBlock } from 'react-icons/bi';

export const CodeIcon = styled(BiCodeBlock)`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 24px;
`;
