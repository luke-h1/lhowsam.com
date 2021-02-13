import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 0.75rem;
  width: 500px;
  margin: 1rem 0 1rem 0;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    transition: all 0.5s;
    border-color: #0070f3;
    cursor: pointer;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 22px;
  }
  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
  }
  @media (max-width: 550px) {
    width: 350px;
  }
`;
