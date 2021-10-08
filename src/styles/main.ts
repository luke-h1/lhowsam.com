import styled from '@emotion/styled';

export const Main = styled.main`
  margin-top: 2rem;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 500px) {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1250px) {
    padding: 10rem;
    padding-top: 6rem;
  }
`;

export const MainTitle = styled.div`
  h1 {
    font-size: clamp(2rem, 10vw, 3.5rem);
    text-align: center;
    margin-bottom: 0;
    line-height: 55pt;
  }

  h2 {
    text-transform: uppercase;
    font-size: clamp(1.2rem, 6vw, 2.5rem);
    margin: 0;
    font-weight: 400;
    text-align: center;
  }
`;

export const MainText = styled.p`
  margin: 1.5rem 0;
  align-self: center;
  color: var(--light);
  font-size: clamp(1rem, 5vw, 1.3rem);
  text-align: left;
  max-width: 65ch;

  a {
    text-decoration: underline;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ButtonContainer = styled.div`
  margin: 1.5rem 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  a {
    margin: 0;
    transition: filter 200ms, transform 200ms;
    &:hover,
    &:focus {
      transform: translateY(-0.2rem) !important;
      filter: brightness(150%) !important;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    &::nth-of-type(2n + 2) {
      margin: 0 10px;
    }
  }
  @media (max-width: 320px) {
    grid-template-columns: auto;
  }
`;
