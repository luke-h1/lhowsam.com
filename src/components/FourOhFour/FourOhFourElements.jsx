/* eslint-disable */
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Container = styled.div`
  z-index: 1;
  background-color: ${(props) => props.backgroundColor}; 
  color: ${(props) => props.textColor}; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Intro = styled.h1`
  margin-bottom: 2em;
  font-family: $mainFont;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Instructions = styled.h2`
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const NotFoundLink = styled(Link)`
  display: block;
  font-size: 25px;
  color: ${(props) => props.textColor};
  text-decoration: none;
  margin: 2em 0 2em 0;
  font-weight: 700;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
    color: ${(props) => props.hoverColor};
  }
`;

export const ArrowIcon = styled(FiArrowRight)`
  margin-left: 20px;
`;