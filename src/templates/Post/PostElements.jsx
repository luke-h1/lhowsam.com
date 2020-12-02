import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

export const PostArticle = styled.article`
margin-top: 0;
padding-bottom: 1rem;
color: #000;
:first-of-type{
  margin-top: 1rem;
}
`;

export const PostWrap = styled.div`
padding: 0.2rem;
color: #000;

`;

export const PostLink = styled(Link)`
margin: 1rem 1rem 0 0;
width: 100px;
color: #000;

`;

export const PostImage = styled(Image)`
   max-height: 200px;
  border-radius: 10px;
  margin-top: 0;

* {
  margin-top: 0;
}
`;

export const PostIntro = styled.p`
font-size: 18px;
`;
