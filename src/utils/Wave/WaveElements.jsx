/* eslint-disable */
import styled from 'styled-components';

export const WaveButton = styled.button`
  background: rebeccapurple;
  border: none;
  color: #000;
  font-size: 1.25rem;
  padding: 0.3rem;
  border-radius: 15px;
  outline: 0;
  display: ${({ centered }) => (centered ? 'flex' : null)};
  justify-content: ${({ centered }) => (centered ? 'center' : null)};
  align-items: ${({ centered }) => (centered ? 'center' : null)};
  cursor: pointer;
  margin: 0 auto;
`;
