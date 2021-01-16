import styled from 'styled-components';

export const Title = styled.h1`
  font-size: clamp(1rem, 8vw, 2.7rem);
  color: ${props => props.theme.darkTextColor};
`;
