/* eslint-disable */
import styled from 'styled-components';

export const ProjectWrap = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.textColor};
  min-height: 50vh;
  min-width: 100vw;
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 0 auto;
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
`

export const ProjectFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const ProjectTitle = styled.h1`
  font-size: clamp(1rem, 8vw, 2.7rem);
  text-align: left;
  font-weight: 700;
`