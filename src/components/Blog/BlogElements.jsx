/* eslint-disable */
import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogSection = styled.div`
  min-width: 100vw;
  max-width: 100vh;
  margin: 0px auto;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.primaryTitleColor};
  margin-top: 4rem;
`;

export const Intro = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 18px;
  text-align: center;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const PostedAt = styled.div`

  margin-top: 1.4rem;
  p {
    font-weight: bold;
    color: #000;
  }
`;

export const BlogWrapper = styled.div`
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  text-align: center;
  grid-gap: 15px;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

export const BlogIntro = styled.div`

  margin-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
`;

export const BlogPost = styled(Link)`

  margin-top: 32px;
  padding-bottom: 32px;
  color: rgb(56, 103, 214);
  display: block;
  text-decoration: none;
  color: inherit;
  display: block;
  border-bottom: 2px solid ${(props) => props.theme.primaryColor}
`;



export const BlogDate = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: baseline;
  font-size: 15px;
`;

export const BlogExcerpt = styled.p`
  text-align: center;
  margin-top: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.primaryColor};
`;
