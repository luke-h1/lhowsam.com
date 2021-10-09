import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { heading } from './helpers';
import { fontSizes } from './typography';

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
    font-size: ${heading.xl};
  }

  h3 {
    font-size: ${heading.md};
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
    ${fontSizes.md};
    margin: 0.5rem 0;
    line-height: 2rem;
  }

  li {
    margin-bottom: 0.3rem;
    margin-left: 1.5rem;
    list-style-type: '. ';
  }

  summary {
    cursor: pointer;
    transition: 200ms;
  }
`;

export const BlogItems = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

export const StyledBlogItem = styled.a`
  padding: 0.8rem 0;
  margin: 0.2rem 0;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background 200ms, transform 150ms;

  h2 {
    font-size: 1.3rem;
    margin: 0;
  }

  p {
    font-size: 1.05rem;
    margin-top: 0.3rem;
    margin-bottom: 0;
  }

  @media (hover: hover) {
    &:hover {
      transform: translate(1.5px, -1.5px);
    }
  }
`;
