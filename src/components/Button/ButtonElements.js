import styled from 'styled-components';

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 6px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: all .4s ease-in-out; 
    transform: scale(1.10);
    cursor: pointer;
  }
`;
export default Button;
