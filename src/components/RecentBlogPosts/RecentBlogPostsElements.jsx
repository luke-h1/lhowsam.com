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
`

export const BlogList = styled.li`
  padding-left: 0;
  margin-bottom: calc((2rem) / 2 ); 
  p { 
    margin-bottom: calc((2rem) / 2); 
  }
  *:last-child { 
    margin-bottom: 0;
  }
  > ul  {
    margin-left: 2rem; 
    margin-top: calc((2rem) / 2); 
  }
`

export const BlogArticle = styled.article`
  margin-bottom: 2rem;
  margin-top: 2rem;
  p { 
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 2rem;
    margin-top: 0;
  }
`

export const BlogHeader = styled.header`
  margin-bottom: 1rem;
`

export const BlogLink = styled(Link)`

`
export const BlogSection = styled.section``