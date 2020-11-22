import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lightTheme, darkTheme } from '../../styles/Themes';
export const BlogSection = styled.div`
  padding-top: 65px;
  max-width: 550px;
  margin: 0px auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const BlogIntro = styled.div`
  margin-bottom: 32px;
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

export const BlogPost = styled(Link)`
  margin-top: 32px;
  padding-bottom: 32px;
  color: rgb(56, 103, 214);
  display: block;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  display: block;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const BlogTitle = styled.h1`
  color: ${lightTheme.textColor};
  text-decoration: none;
  margin: 0px 0px 8px;
  font-size: 24px;
  display: block;
  align-self: flex-start;
  font-weight: 700;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
    color: ${lightTheme.hoverColor};
    text-decoration: underline;
  }
`;

export const BlogDate = styled.p`
  margin: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: baseline;
  font-size: 15px;
  color: ${lightTheme.textColor};
`;
