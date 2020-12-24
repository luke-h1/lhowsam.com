/* eslint-disable */
import styled from 'styled-components';
import { Link } from 'gatsby';
export const BlogWrapper = styled.ol`
  margin-left: 0; 
  margin-right: 0;
  padding: 0;
  margin-bottom: 2rem;
  list-style-position: outside;
  list-style-image: none;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.secondaryBackgroundColor};
  min-width: 100vw;
  min-height: 50vh;
`

export const BlogList = styled.li`
  padding-left: 0;
  color: ${(props) => props.theme.textColor};
  margin-bottom: calc((2rem) / 2 ); 
  p { 
    margin-bottom: calc((2rem) / 2); 
    color: ${(props) => props.theme.textColor};

  }
  *:last-child { 
    margin-bottom: 0;
  }
  > ul  {
    margin-left: 2rem; 
    margin-top: calc((2rem) / 2); 
    color: ${(props) => props.theme.textColor};

  }
`

export const BlogArticle = styled.article`
  margin-bottom: 2rem;
  margin-top: 2rem;
  p { 
    margin-bottom: 0;
    color: ${(props) => props.theme.textColor};

  }
  h2 {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.textColor};

    margin-top: 0;
  }
`

export const BlogHeader = styled.header`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primaryColor};

`

export const BlogLink = styled(Link)`

`
export const BlogSection = styled.section``