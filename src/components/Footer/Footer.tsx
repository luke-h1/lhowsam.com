/* eslint-disable react/prop-types */
import React from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

import { ThemeProvider } from 'styled-components';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  LinkWrapper,
  LinkItem,
} from './FooterStyles';

const Footer: React.FC<{ theme: String }> = (props) => {
  const theme = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FooterContainer>
          <FooterWrap>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    href="https://github.com/luke-h1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com/in/lukehowsam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin />
                  </SocialIconLink>
                  <SocialIconLink
                    href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiMail />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
            <LinkWrapper>
              <LinkItem href="/">
                <a>/Home</a>
              </LinkItem>
              <LinkItem href="/projects">
                <a>/Projects</a>
              </LinkItem>
              <LinkItem href="/blog">
                <a>/Blog</a>
              </LinkItem>
              <LinkItem href="/about">
                <a>/About</a>
              </LinkItem>
            </LinkWrapper>
          </FooterWrap>
        </FooterContainer>
      </ThemeProvider>
    </>
  );
};

export default Footer;
