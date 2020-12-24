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

export const ProjectFlex = styled.div`
background: ${(props) => props.theme.secondaryBackgroundColor};
min-height: 50vh;
padding: 2rem;
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 350px;
  height: 250px;
  margin-bottom: 1em;
  margin-top: 1em;
  text-align: center;
  h1 {
    font-weight: 500;
  }
`