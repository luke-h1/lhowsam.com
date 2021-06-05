import React from 'react';
import { Container } from '@src/components/common/Container';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
  Twitter, LinkedIn, Github, Email,
} from '@src/Icons/Social';

export const Wrapper = styled.div`
  padding: 8rem 0 4rem 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  a,
  span {
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <Link href="/">
          <a>Luke H</a>
        </Link>
      </Details>
      <Links>
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="https://twitter.com/LukeH_1999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </a>
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="https://www.linkedin.com/in/lukehowsam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <LinkedIn />
        </a>
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="https://github.com/luke-h1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Githu"
        >
          <Github />
          {' '}
        </a>
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <Email />
          {' '}
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
