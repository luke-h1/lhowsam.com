/* eslint-disable react/prop-types */
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
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
} from './FooterElements';

const Footer: React.FC<{ theme: String }> = props => {
  const theme = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FooterContainer>
          <FooterWrap>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink href='https://github.com/luke-h1' target='_blank' rel='noopener noreferrer'>
                    <FiGithub />
                  </SocialIconLink>
                  <SocialIconLink href='https://www.linkedin.com/in/lukehowsam/' target='_blank' rel='noopener noreferrer'>
                    <FiLinkedin />
                  </SocialIconLink>
                  <SocialIconLink
                    href='mailto:luke.howsam@yahoo.com?subject=Get In Touch'
                    aria-label='Email'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiMail />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
            <LinkWrapper>
              <LinkItem to='/'>/Home</LinkItem>
              <LinkItem to='/projects'>/projects</LinkItem>
              <LinkItem to='/blog'>/blog</LinkItem>
              <LinkItem to='/about'>/about</LinkItem>
            </LinkWrapper>
          </FooterWrap>
        </FooterContainer>
      </ThemeProvider>
    </>
  );
};

export default Footer;
