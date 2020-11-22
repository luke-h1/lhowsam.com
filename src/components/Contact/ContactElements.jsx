import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const ContactWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${lightTheme.backgroundColor};
  color: ${lightTheme.textColor};
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
  background-color: ${lightTheme.backgroundColor};
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
  fill: ${lightTheme.textColor};
  margin: 0 1em 5px 1em;
  &:hover {
    fill: ${lightTheme.hoverColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const LinkedIn = styled(FaLinkedin)`
  font-size: 20px;
  fill: ${lightTheme.textColor};
  margin: 0 1em 0 1em;
  &:hover {
    fill: ${lightTheme.hoverColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 20px;
  fill: ${lightTheme.textColor};
  margin: 0 1em 0 1em;
  &:hover {
    fill: ${lightTheme.hoverColor};
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const WaveWrap = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  P {
    margin-top: 1rem;
    text-align: center;
    margin: 0 auto;
  }
`;

export const WaveJoke = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  @media (max-width: 640px) {
    margin: 0 auto;
    width: 85%;
  }
`;

export const WaveDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 15px 0;
`;
