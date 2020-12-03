import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

export const PostArticle = styled.article`
   margin-top: 0;
  padding-bottom: 1rem;
  :first-of-type {
   margin-top: 1rem;
      }  

`;

export const PostWrap = styled.div`
  color: ${(props) => props.theme.primaryTextColor};
`;

export const PostImage = styled(Image)`
      max-height: 200px;
    border-radius: 10px;
    margin-top: 0;

  * {
    margin-top: 0;
  }
`;

export const PostParagraph = styled.p`
    color: ${(props) => props.theme.primaryTextColor};

`;

export const PostLink = styled(Link)`
  margin: 1rem 1rem 0 0;
        width: 100px;
`;
