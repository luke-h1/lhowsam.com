/* eslint-disable */
import styled from 'styled-components';
import { DiGithubBadge } from 'react-icons/di';
import { IoIosBrowsers } from 'react-icons/io';
export const ProjectWrap = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.textColor};
  min-height: 50vh;
  min-width: 100vw;
  padding-left: 1.5rem;

`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 0 auto;
  @media(max-width: 772px){
    grid-template-columns: repeat(1, 1fr);

  }
`
export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 350px;
  height: 280px;
  margin-bottom: 1em;
  margin-top: 1em;
  text-align: center;
  h1 {
    font-weight: 500;
    font-size: 25px;
  }
`
// 772 

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

export const TechWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p { 
    margin: 1rem 0 12px 0 ;
    border-bottom: 1px solid #000;
    font-weight: 700;
  }
  span { 
    font-weight: 700;
  }

`


export const Links = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
   a { 
     margin: 0 5px 0 5px;
   }
`

export const GithubLink = styled(DiGithubBadge)`
  color: #000;
  font-size: 35px;
  &:hover {
    color: ${(props) => props.theme.PrimaryHoverColor}; 
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }


`

export const SiteLink = styled(IoIosBrowsers)`
  color: #000;
  font-size: 35px;
  &:hover {
    color: ${(props) => props.theme.PrimaryHoverColor}; 
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }

`

export const ButtonWrap = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`