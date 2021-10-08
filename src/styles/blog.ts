import styled from '@emotion/styled';

export const ReactMarkdown = styled.main`
  margin-top: 1rem;

  a {
    text-decoration: underline;
  }

  h4,
  h3,
  h2,
  h1 {
    margin-top: 1rem;
    scroll-margin-top: 4.5rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    width: 100%;
    position: relative;

    a {
      position: absolute;
      cursor: pointer;

      width: 100%;
      height: 100%;
    }
  }

  p,
  hr {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    line-height: 2rem;
  }

  li {
    margin-bottom: 0.3rem;
    margin-left: 1.5rem;
    list-style-type: '- ';
  }

  summary {
    cursor: pointer;
    transition: 200ms;
  }
`;

export const BlogItems = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

export const StyledBlogItem = styled.a``;
