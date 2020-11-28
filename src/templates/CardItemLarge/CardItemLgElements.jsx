/* eslint-disable */
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const CardLgWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.primaryColor}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 
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
  color: ${(props) => props.theme.primaryColor};
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


export const GithubLink = styled.a`
  color: ${(props) => props.theme.primaryColor};
  font-size: 35px;
  margin-bottom: 10px;
  margin: 0 10px 0 10px;

  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
    cursor: pointer;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const SiteLink = styled.a`
  margin: 0 10px 0 10px;
  color: ${(props) => props.theme.primaryColor};
  font-size: 35px;
  margin-bottom: 20px;
  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
    cursor: pointer;
    transform: scale(1.15);
    transition: scale ease 0.5s;
  }
`;

export const ProjectLgLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
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
  color: ${(props) => props.theme.primaryColor};
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