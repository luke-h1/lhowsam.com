/* eslint-disable */
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../../styles/Themes';

const Button = styled.button`
  min-width: 100px;
  padding: 5px 20px;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.primaryBackgroundColor}; 
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background-color: #eee;
    color: #000;
    cursor: pointer;
  }
`;
export default Button;
