import React from 'react';
import { SiGithub } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Logo goes here</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </SocialIconLink>
              <SocialIconLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin2 />
              </SocialIconLink>
              <SocialIconLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;
