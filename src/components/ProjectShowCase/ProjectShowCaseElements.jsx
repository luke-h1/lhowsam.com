/* eslint-disable */
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const ShowCaseWrapper = styled.div`
  min-height: 60vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 
  color: ${(props) => props.theme.primaryColor}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    min-height: 120vh;
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
  margin-bottom: 4rem;
`;

export const ShowCaseTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
`;
