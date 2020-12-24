/* eslint-disable */
import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background: ${(props) => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 { 
    font-size: clamp(1rem, 8vw, 2.7rem);
    color: ${(props) => props.theme.lightTextColor};
    font-weight: 700;
    text-align: left;
  }
`

export const ProjectIntro = styled.div`
  margin-top: 10rem;
`

export const ProjectFlex = styled.div``

export const ProjectGrid = styled.div``