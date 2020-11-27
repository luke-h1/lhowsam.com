/* eslint-disable */
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { lightTheme, darkTheme } from '../../styles/Themes';

export const ContactWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${lightTheme
    ? lightTheme.backgroundColor
    : darkTheme.backgroundColor};
  color: ${lightTheme ? lightTheme.textColor : darkTheme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin-bottom: 2em;
  line-height: 2;
  letter-spacing: 5px;
  filter: brightness(1.5);
  filter: contrast(300);
  background-color: ${lightTheme
    ? lightTheme.backgroundColor
    : darkTheme.backgroundColor};
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
  fill: ${lightTheme ? lightTheme.textColor : darkTheme.textColor};
  margin: 0 1em 5px 1em;
  &:hover {
    fill: ${lightTheme ? lightTheme.hoverColor : darkTheme.hoverColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const LinkedIn = styled(FaLinkedin)`
  font-size: 20px;
  fill: ${lightTheme ? lightTheme.textColor : darkTheme.textColor};
  margin: 0 1em 0 1em;
  &:hover {
    fill: ${lightTheme ? lightTheme.hoverColor : darkTheme.hoverColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 20px;
  fill: ${lightTheme ? lightTheme.textColor : darkTheme.textColor};
  margin: 0 1em 0 1em;
  &:hover {
    fill: ${lightTheme ? lightTheme.hoverColor : darkTheme.hoverColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;
