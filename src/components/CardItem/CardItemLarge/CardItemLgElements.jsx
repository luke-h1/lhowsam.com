import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardLgWrapper = styled.div`
  min-width: 100vw;
  color: $darkTextColor;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $backgroundColor;
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
  color: $darkTextColor;
`;

export const Container = styled.div`
  text-align: center;
  p {
    font-size: 18px;
    line-height: 1.6;
    @media (max-width: 640px) {
      font-size: 16px;
      width: 85%;
      margin: 0 auto;
    }
  }
`;

// export const ProjectImageLg = styled.image``

// export const IconContainer = styled.div``

export const GithubLink = styled.a`
  color: $darkTextColor;
  font-size: 35px;
  margin-bottom: 10px;
  margin: 0 10px 0 10px;

  &:hover {
    color: $iconHover;
    cursor: pointer;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const SiteLink = styled.a`
  margin: 0 10px 0 10px;

  color: $darkTextColor;
  font-size: 35px;
  margin-bottom: 20px;
  &:hover {
    color: $iconHover;
    cursor: pointer;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const ProjectLgLink = styled(Link)`
  color: $darkTextColor;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 18px;
  &:hover {
    color: $borderBottom;
    cursor: pointer;

    transition: all ease 0.2s;
    transform: scale(1.15);
  }
`;
