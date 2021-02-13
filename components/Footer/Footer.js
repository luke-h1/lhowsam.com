/* eslint-disable react/prop-types */
import {
  FiGithub, FiTwitter, FiMail, FiLinkedin,
} from 'react-icons/fi';
import { ThemeProvider } from '@emotion/react';
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

const Footer = ({ theme }) => {
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
                  <SocialIconLink
                    href="https://twitter.com/LukeH_1999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiTwitter />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
            <LinkWrapper>
              <LinkItem href="/">
                <a>/Home</a>
              </LinkItem>
              <LinkItem href="/about">
                <a>/About</a>
              </LinkItem>
              <LinkItem href="/projects">
                <a>/Projects</a>
              </LinkItem>
              <LinkItem href="/blog">
                <a>/Blog</a>
              </LinkItem>
            </LinkWrapper>
          </FooterWrap>
        </FooterContainer>
      </ThemeProvider>
    </>
  );
};

export default Footer;
