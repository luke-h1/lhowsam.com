/* eslint-disable */
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background: ${(props) => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 { 
    font-size: clamp(1rem, 8vw, 2.7rem);
    color: ${(props) => props.theme.lightTextColor};
    text-align: left;
    font-weight: 700;
    margin-top: 10rem;
  }
`

export const AboutIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`

export const AboutFlex = styled.div`
  min-height: 55vh;
  background: ${(props) => props.theme.secondaryBackgroundColor};
`