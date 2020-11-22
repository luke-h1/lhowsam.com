import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { light } from '../../../styles/Colors';
import { lightTheme, darkTheme } from '../../../styles/Themes';
export const CardLgWrapper = styled.div`
  min-width: 100vw;
  color: ${lightTheme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.backgroundColor};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  @media (max-width: 640px) {
    max-width: 440px;
  }

  img {
    width: 200px;
    height: 200px;
    margin: 1em 0 1em 0;
    border-radius: 15px;
  }
`;

export const ItemTitle = styled.h1`
  text-align: center;
  font-family: $titleFont;
  letter-spacing: 3px;
  color: ${lightTheme.textColor};
  @media (max-width: 640px) {
    width: 85%;
  }
`;

export const Container = styled.div`
  text-align: center;
  p {
    font-size: 18px;
    line-height: 1.6;
    @media (max-width: 640px) {
      font-size: 16px;
      width: 75%;
      margin: 0 auto;
    }
  }
`;

// export const ProjectImageLg = styled.image``

// export const IconContainer = styled.div``

export const GithubLink = styled.a`
  color: ${lightTheme.textColor};
  font-size: 35px;
  margin-bottom: 10px;
  margin: 0 10px 0 10px;

  &:hover {
    color: ${lightTheme.hoverColor};
    cursor: pointer;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const SiteLink = styled.a`
  margin: 0 10px 0 10px;
  color: ${lightTheme.textColor};
  font-size: 35px;
  margin-bottom: 20px;
  &:hover {
    color: ${lightTheme.hoverColor};
    cursor: pointer;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const ProjectLgLink = styled(Link)`
  color: ${lightTheme.textColor};
  text-decoration: none;
  margin-top: 1rem;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    transition: all ease 0.2s;
    transform: scale(1.15);
  }
`;

export const ProjectSecondLink = styled(Link)`
  color: ${lightTheme.textColor};
  text-decoration: none;
  margin-top: 1rem;
  font-size: 18px;
  @media (max-width: 700px) {
    margin-bottom: 6rem;
  }
  &:hover {
    cursor: pointer;
    transition: all ease 0.2s;
    transform: scale(1.15);
  }
`;
