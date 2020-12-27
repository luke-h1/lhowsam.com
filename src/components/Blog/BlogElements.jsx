/* eslint-disable */
import { Link } from 'gatsby';
import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background: ${(props) => props.theme.BlueBackgroundColor};
  min-height: 65vh;
  h1 { 
    font-size: clamp(1rem, 8vw, 2.7rem);
    color: ${(props) => props.theme.lightTextColor};
    text-align: left;
    font-weight: 700;
  }
`

export const BlogIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-top: 10rem;
`

export const BlogFlex = styled.div`
  min-width: 50vh;
  background: ${(props) => props.theme.primaryBackgroundColor};
  padding: 1rem;

`

export const BlogList = styled.li`
  padding-left: 0;
  color: ${(props) => props.theme.textColor};
  list-style-type: none;
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

export const BlogSection = styled.section`
p { 
  width: 70%;
}
`

export const BlogLink = styled(Link)``