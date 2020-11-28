/* eslint-disable */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogSection = styled.div`
  max-width: 550px;
  margin: 0px auto;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 100vh;
`;

export const BlogIntro = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Intro = styled.p`
  font-size: 18px;
  text-align: center;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

/* BLOG CARD STYLES */
export const CardItem1 = styled.div`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  background: ${(props) => props.backgroundColor}; 
  max-width: 500px;
  min-width: 500px;
  @media(max-width: 558px){
    max-width: 400px;
    min-width: 300px;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
    filter: brightness(150%);
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

export const CardFigure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.neutralColor}; 
    background-color: ${(props) => props.textColor};
    box-sizing: border-box;
  }
`;

export const CardItemInfo = styled.div`
  padding: 20px 30px 30px;
`;

export const CardText = styled.h5`
  color: ${(props) => props.textColor};
  font-size: 18px;
  line-height: 24px;
  &:last-of-type {
    margin-top: 1rem;
    font-weight: normal;
    margin-bottom: 1em;
  }
`;


export const PostedAt = styled.div`
  margin-top: 1.4rem;
  p { 
    font-weight: bold;
    color: #000;
  }
`; 
