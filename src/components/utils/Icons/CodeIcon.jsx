/* eslint-disable */
import styled from 'styled-components';
import { BiCodeBlock } from 'react-icons/bi';
import { lightTheme, darkTheme } from '../../../styles/Themes';

export const CodeIcon = styled(BiCodeBlock)`
  color: ${(props) => props.theme.primaryColor}; 
  font-size: 24px;
`;
