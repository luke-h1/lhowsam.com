/* eslint-disable */
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


export const ContactContainer = styled.div`
 flex-direction: column;
  justify-content: left;
  align-items: left;
  background: ${(props) => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 { 
    margin-top: 10rem;
    font-size: clamp(1rem, 8vw, 2.7rem);
    color: ${(props) => props.theme.lightTextColor};
    text-align: left;
    font-weight: 700;
  }`

export const ContactIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  /* margin-top: 10rem; */
`

export const ContactWrapper = styled.div`
  min-height: 40vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.secondaryBackgroundColor}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryColor}; 

  h1 { 
    color: ${(props) => props.theme.primaryTitleColor}; 
    font-family: ${(props) => props.theme.titleFont};

  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 2em;
  line-height: 2;
  letter-spacing: 5px;
  filter: brightness(1.5);
  filter: contrast(300);
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 
`;

export const Alternatives = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    word-wrap: wrap;
  }
  a {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  @media (max-width: 640px) {
    margin-bottom: 1rem;
  }
`;

export const EmailIcon = styled(AiOutlineMail)`
  font-size: 20px;
  fill: ${(props) => props.theme.primaryColor}; 
  margin: 0 1em 5px 1em;
  &:hover {
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const LinkedIn = styled(FaLinkedin)`
  font-size: 20px;
  fill: ${(props) => props.theme.primaryColor}; 
  margin: 0 1em 0 1em;
  &:hover {
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 20px;
  fill: ${(props) => props.theme.primaryColor}; 
  margin: 0 1em 0 1em;
  &:hover {
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;