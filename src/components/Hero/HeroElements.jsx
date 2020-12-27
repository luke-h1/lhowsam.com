/* eslint-disable */
import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background: ${(props) => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 { 
    font-size: clamp(1rem, 8vw, 2.7rem);

  }
  h1,p { 
    color: ${(props) => props.theme.lightTextColor};
    font-weight: 700;
  }
  p { 
    margin-top: 2rem;
    margin: 2rem 0 0 0.1rem;
    word-wrap: wrap;
    width: 50%;
    font-size: clamp(1rem, 8vw, 1.5rem);
    font-weight: bold;
    @media(max-width: 600px){
      width: 60%;
    }
  }
`;

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