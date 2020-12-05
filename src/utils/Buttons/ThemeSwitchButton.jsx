/* eslint-disable */
import styled from 'styled-components';

export const ThemeSwitchButton = styled.button`
  background: ${({ primary }) => (primary ? '#f26a2e' : '#077bf1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: 0;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
  &:hover {
    background: ${({ primary }) => (primary ? '#077bf1' : '#f26a2e')};
    transform: translateY(-2px);
  }
  @media (max-width: 900px) {
    /* display: none; */
  }
`;
