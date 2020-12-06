/* eslint-disable */

import styled from 'styled-components';
import { Link } from 'gatsby';


export const BlogPostWrapper = styled.div`
min-width: 100vw;
min-height: 100vh;
max-height: 250vh;
background-color: ${(props) => props.theme.primaryBackgroundColor};
padding-bottom: 10rem;

`

export const Wrapper = styled.article`
  padding-top: 65px;
  max-width: 750px;
  margin: 0px auto;
  padding-left: 16px;
  padding-right: 16px;
  color: ${(props) => props.theme.primaryColor};
  @media(max-width: 650px){
    max-width: 650px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Intro = styled.div`
  margin-bottom: 32px;
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
`;

export const Blog = styled.p`
  font-size: 18px;
  text-align: center;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.6;
  letter-spacing: 1px;
`;

export const BlogLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor}; 
  text-decoration: none;
  margin: 20px 1rem 0 1rem;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primaryHoverColor}; 
    transition: all ease 0.2s;
    transform: scale(1.15);
  }
`;

export const BlogLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
