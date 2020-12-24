/* eslint-disable */
import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
background: ${(props) => props.theme.primaryBackgroundColor};
align-items: center;
min-width: 70vw;
max-width: 70vw;
`
export const StyledHeader = styled.header`
  margin: 0 0 2rem 0;
`


export const StyledSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p { 
  padding: 0.5rem;
  font-size: 20px;
  font-weight: 500;
}
`

export const StyledLink = styled(Link)`
  color: #000;
  margin: 0 5px 0 5px;
  font-weight: 700;
  &:hover { 
    transform: scale(1.15);
    transition: scale 0.2s ease;
    color: ${(props) => props.theme.PrimaryHoverColor}
  }
`