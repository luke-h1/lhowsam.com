import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  min-width: 100vw;
  padding: 4rem;
  min-height: 100vh;
  text-align: center;
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 75%;
`;

export const ProjectTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
`