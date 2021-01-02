/* eslint-disable */
import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  justify-content: left;
  align-items: center;
  background: ${(props) => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 { 
    font-size: clamp(1rem, 8vw, 2.7rem);

  }
  h1 { 
    color: ${(props) => props.theme.lightTextColor};
    font-weight: 700;
  }
`;

export const Intro = styled.p`
  font-size: clamp(1rem, 8vw, 1.5rem);
  color: ${(props) => props.theme.lightTextColor}; 
  font-weight: bold;
  line-height: 1.6;
  width: 50%;
  @media(max-width: 600px){
      width: 90%;
    }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-top: 2rem;
`

export const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  max-width: 100vw;
  @media(max-width: 600px){
    margin-bottom: 1rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  width: 200px;
`