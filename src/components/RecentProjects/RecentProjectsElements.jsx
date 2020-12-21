/* eslint-disable */
import { Link } from 'gatsby';
import styled from 'styled-components';


export const ShowCaseWrapper = styled.div`
  min-height: 400px;
  min-width: 100vw;
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 
  color: ${(props) => props.theme.primaryColor}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  @media (max-width: 620px) {
    min-height: 40vh;
  }
  @media (max-width: 375px) {
    min-height: 140vh;
  }
`;

export const ShowCaseContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  @media (max-width: 898px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ShowCaseTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.primaryTitleColor}

`;

export const Small = styled.small`
  color: ${(props) => props.theme.primaryColor};
`

export const ProjectLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
`