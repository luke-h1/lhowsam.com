/* eslint-disable */
import styled from 'styled-components';
import { BiCodeBlock } from 'react-icons/bi';
import { lightTheme, darkTheme } from '../../../styles/Themes';

export const CodeIcon = styled(BiCodeBlock)`
  color: ${lightTheme ? lightTheme.textColor : darkTheme.textColor};
  font-size: 24px;
`;
