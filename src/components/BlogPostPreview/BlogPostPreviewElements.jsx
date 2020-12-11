/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogTitle = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  margin: 0px 0px 8px;
  font-size: 24px;
  display: block;
  align-self: flex-start;
  font-weight: 700;
  line-height: 1.25;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primaryHoverColor};
    text-decoration: underline;
  } 
  `;

export const BlogPost = styled(Link)`
  margin-top: 32px;
  padding-bottom: 32px;
  color: rgb(56, 103, 214);
  display: block;
  text-decoration: none;
  color: inherit;
  display: block;
  border-bottom: 2px solid ${(props) => props.theme.borderBottom};
  font-weight: 300;
`;

export const BlogDate = styled.p`
  color: ${(props) => props.theme.borderBottom};
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
